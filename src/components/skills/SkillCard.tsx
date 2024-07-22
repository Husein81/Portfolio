import { Box, Card, CardContent,Typography } from "@mui/material"

interface SkillCardProps{
    name: string;
    image: string;
}
const SkillCard: React.FC<SkillCardProps> = ({ name, image}) => {
  return (  
    <Box className="shadow-md shadow-purple-300  w-full" >
        <Card sx={{width:'100%'}} >
            <img 
            className="hover:scale-105 duration-200 object-contain h-32 sm:h-24 mx-auto w-20 cursor-pointer rounded"
            src={image}
            alt=""/>
            <CardContent >
                <Typography variant="h6" color={"gray"} component="h1" gutterBottom>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    </Box>
  )
}
export default SkillCard