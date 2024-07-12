import { Card, CardContent, CardMedia,Typography } from "@mui/material"

interface SkillCardProps{
    name: string;
    image: string;
}
const SkillCard: React.FC<SkillCardProps> = ({ name, image}) => {
  return (  
        <Card sx={{width:'100%'}} >
            <CardMedia
            component="img"
            className="hover:scale-105 duration-200"
            sx={{borderRadius:'20px', cursor:'pointer'}}
            image={image}
            alt=""/>
            <CardContent>
                <Typography variant="h6" color={"gray"} component="h1" gutterBottom>
                    {name}
                </Typography>
            </CardContent>
        </Card>
  )
}
export default SkillCard