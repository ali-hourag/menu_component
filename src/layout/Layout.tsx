import { Outlet } from "react-router-dom"
import ThemeModeContextProvider from "../context/ThemeModeContextProvider";
import ExtendedMenuContextProvider from "../context/ExtendedMenuContextProvider";


const Layout = () => {
    return (
        <ThemeModeContextProvider>
            <ExtendedMenuContextProvider>
                <Outlet />
            </ExtendedMenuContextProvider>
        </ThemeModeContextProvider>
    )
}

export default Layout;