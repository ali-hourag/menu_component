import { ThemeModeType } from "../../context/ThemeModeContextProvider";
import { useThemeModeContext } from "../../utils/hooks/useThemeModeContext";
import Logo from "../logo/Logo";
import TopBtns from "../topBtns/TopBtns";
import styles from "./menu.module.css";

const Menu = () => {
    const { themeMode } = useThemeModeContext();
    return (
        <section className={`${styles.container} 
        ${themeMode === ThemeModeType.LIGHT_MODE ? styles.containerLightMode : ""}`}>
            <TopBtns />
            <Logo />
            <div className={styles.entries}>
            </div>
            <div>
            </div>
            <div>
            </div>
        </section>
    )
}

export default Menu