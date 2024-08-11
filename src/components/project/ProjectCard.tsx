import { Box, Card, CardContent, Typography } from "@mui/material"

interface ProjectCardProps{
    title: string;
    imageUrl: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({title, imageUrl}) => {
  return (
    <Card className="rounded shadow overflow-hidden">
        <Box
          component="img"
          className="hover:scale-105 duration-200"
          sx={{borderRadius:1, cursor:'pointer', height: 150,}}
          src={imageUrl}
          alt=""/>
          <CardContent>
            <Typography variant="body1">{title}</Typography>
          </CardContent>
    </Card>
  )
}
export default ProjectCard