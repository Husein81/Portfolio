import { Box, CircularProgress } from "@mui/material"

interface LoaderProps {
    size?:number;
    color?:'primary' | 'secondary' | 'error' | 'info' | 'success' ;
}
const Loader:React.FC<LoaderProps> = ({size = 40, color ='primary'}) => {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight={'100vh'}>
        <CircularProgress size={size} color={color}/>
    </Box>
  )
}
export default Loader