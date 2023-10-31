import Menu from "../../components/menu/Menu";
import { ThemeModeType } from "../../context/ThemeModeContextProvider";
import { useThemeModeContext } from "../../utils/hooks/useThemeModeContext";
import styles from "./mainPage.module.css";


const MainPage = () => {

    const { themeMode } = useThemeModeContext();

    return (
        <main className={`${styles.container} ${themeMode === ThemeModeType.LIGHT_MODE ? styles.lightBgImage : styles.darkBgImage}`}>
            <Menu />
        </main>
    )
}

export default MainPage;