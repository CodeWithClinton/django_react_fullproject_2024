import NavBar from "../components/NavBar"
import {Outlet} from "react-router-dom"
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout