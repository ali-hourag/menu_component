import { ThemeModeType } from "../../context/ThemeModeContextProvider";
import { useExtendedMenuContext } from "../../utils/hooks/useExtendedMenuContext";
import { useThemeModeContext } from "../../utils/hooks/useThemeModeContext";
import Logo from "../logo/Logo";
import MenuItems from "../menuItems/MenuItems";
import MessagesMenu from "../messagesMenu/MessagesMenu";
import ProfileMenu from "../profileMenu/ProfileMenu";
import TopBtns from "../topBtns/TopBtns";
import styles from "./menu.module.css";

const Menu = () => {
    const { themeMode } = useThemeModeContext();
    const { extendedMenu } = useExtendedMenuContext();
    return (
        <section className={`${styles.container} 
        ${themeMode === ThemeModeType.LIGHT_MODE ? styles.containerLightMode : ""}
        ${extendedMenu ? styles.containerExtended : ""}
        `}>
            <TopBtns />
            <Logo />
            <MenuItems />
            <MessagesMenu />
            <ProfileMenu />
        </section>
    )
}

export default Menu