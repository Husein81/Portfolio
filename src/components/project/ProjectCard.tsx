import { Card, CardContent, CardMedia, Typography } from "@mui/material"

interface ProjectCardProps{
    title: string;
    imageUrl: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({title, imageUrl}) => {
  return (
    <Card className="shadow overflow-hidden">
        <CardMedia
          component="img"
          className="hover:scale-105 duration-200"
          sx={{borderRadius: '20px', cursor:'pointer'}}
          image={imageUrl}
          alt=""/>
          <CardContent>
            <Typography variant="h5">{title}</Typography>
          </CardContent>
    </Card>
  )
}
export default ProjectCard