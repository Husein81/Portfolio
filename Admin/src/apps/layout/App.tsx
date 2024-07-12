import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"
import SideBar from "../../components/SideBar/SideBar"

function App() {

  return (
    <>
      <SideBar/>
      <Container>
        <Outlet/>
      </Container>
    </>
  )
}

export default App
