import { Outlet } from "react-router-dom"
import ThemeModeContextProvider from "../context/ThemeModeContextProvider";


const Layout = () => {
    return (
        <ThemeModeContextProvider>
            <Outlet />
        </ThemeModeContextProvider>
    )
}

export default Layout;