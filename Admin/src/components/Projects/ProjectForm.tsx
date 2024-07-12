/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { 
    useCreateProjectMutation, 
    useGetProjectQuery, 
    useUpdateProjectMutation } from "../../apps/redux/Slice/projectApi";
import { 
    Box,
    Button, 
    Container, 
    FormControl, 
    FormGroup, 
    FormLabel, 
    IconButton, 
    TextField, 
    Typography } from "@mui/material";
import { Project } from "../../apps/model/Project";
import Loader from "../Loader";
import { app } from "../../firebase";
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { Close, Upload } from "@mui/icons-material";

const ProjectForm = () => {
    const {id: projectId} = useParams<{id: string}>();
    const [images, setImages] = useState<FileList | null>(null);
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [project, setProject] = useState<Project>({ 
        id:'',
        title:'',
        description:'',
        imageUrls: [] ,
        startDate:'',
        endDate:''
    });

    const {data: fetchData, isLoading} = useGetProjectQuery(projectId!, {
        skip: !projectId
    });
    const [updateProject] = useUpdateProjectMutation();
    const [createProject, {isLoading: loadingCreate}] = useCreateProjectMutation();

    useEffect(() => {
      if(projectId)
        setProject(fetchData as Project);
    }, [fetchData]);

    const storeImage = (file: File): Promise<string> => {
        return new Promise((resolve, reject) =>{
        const storage = getStorage(app);
        const filename = new Date().getTime() + file.name;
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, file);
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload is ${progress}% done`);
            },
            (error) => reject(error),
            () => {
              getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadUrl) => resolve(downloadUrl));
            }
          )
        });
      };
  
      const handleImageSubmit = () => {
        const newImage = images as FileList
        if(newImage.length > 0 && newImage.length + project.imageUrls.length < 7){
          setLoadingUpload(true);
          const promises: Promise<string>[] = [];
          for(let i = 0; i < newImage.length; i++ ){
            promises.push(storeImage(newImage.item(i) as File))
          }
          Promise.all(promises)
            .then((urls) => 
              setProject({
              ...project,
              imageUrls: project.imageUrls.concat(urls)
            }))
            .then(() => setLoadingUpload(false))
            .catch(() => {
              setLoadingUpload(false);
              console.log("Image upload failed (2 mb max per image)");
            })
        } else {
          setLoadingUpload(false);
          console.log("You can only upload 6 images per listing");
        }
      };
      
      const handleRemoveImage = (url: string, index: number) => {
        const imageName = url.split('/')[7].split('?')[0];
        const storage = getStorage(app); 
        const storageRef = ref(storage, imageName);
        deleteObject(storageRef)
          .catch(() => 
            console.log('Unable to delete the image')
          );
          setProject({
            ...project,
            imageUrls: project.imageUrls.filter((_, i) => i !== index) 
          })
      }
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProject({
          ...project,
          [name]: value
        });
      }
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          if(projectId){
            await updateProject({...project, id: projectId});
          }
          await createProject(project);
        } catch (error) {
          console.log(error)
        }
      }

    if(isLoading) return <Loader/>
  return (
    <Container component={'form'} onSubmit={handleSubmit} autoComplete={'off'} sx={{miHeight:300,}}>
      <FormControl component={'fieldset'} variant="standard" fullWidth >
        <FormLabel component="legend">
          <Typography variant="h5" color="text.secondary">Project Form</Typography>
        </FormLabel>
        <FormGroup>
          <TextField
            id="title"
            margin="dense"
            label="Title"
            variant="outlined"
            name="title"
            value={project.title}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="description"
            margin="dense"
            label="Description"
            variant="outlined"
            name="description"
            value={project.description}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth/>
          <TextField
            id="startDate"
            margin="dense"
            type="date"
            variant="outlined"
            name="startDate"
            value={project.startDate}
            onChange={handleChange}
            fullWidth/>
          <TextField
            id="endDate"
            margin="dense"
            type="date"
            variant="outlined"
            name="endDate"
            value={project.endDate}
            onChange={handleChange}
            fullWidth/>
          <Box display={'flex'} gap={2} py={1}>
            <input
              type="file"
              id="image"
              style={{display:'none'}}
              multiple
              onChange={(e) => setImages(e.target.files)}
            />
            <FormLabel htmlFor="image">
              <IconButton component="span">
                <Upload/>
              </IconButton>
            </FormLabel>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleImageSubmit}
              disabled={loadingUpload}
            >
              Upload Image
            </Button>
          </Box>
          <Box display={'flex'} gap={2} py={1}>
            {project.imageUrls.map((url, index) => (
              <Box key={index}>
                  <IconButton onClick={() => handleRemoveImage(url, index)}>
                    <Close/>
                  </IconButton>
                <Box
                  component={'img'} 
                  src={url} 
                  alt="project" 
                  style={{width: 100, height: 100}}
                  />
              </Box>
            ))}
          </Box>
        </FormGroup> 
          <Button
            variant="contained"
            color="secondary"
            type="submit" disabled={loadingCreate}>
            Submit
          </Button>
      </FormControl>
    </Container>
  )
}
export default ProjectForm