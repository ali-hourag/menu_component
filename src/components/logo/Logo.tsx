import { Icon } from '@iconify/react';
import styles from "./logo.module.css";
import { useThemeModeContext } from '../../utils/hooks/useThemeModeContext';
import { ThemeModeType } from '../../context/ThemeModeContextProvider';
import { useExtendedMenuContext } from '../../utils/hooks/useExtendedMenuContext';


const Logo = () => {
    const { themeMode, changeThemeMode } = useThemeModeContext();
    const { extendedMenu } = useExtendedMenuContext();

    const handleLogoClicked = () => {
        themeMode === ThemeModeType.DARK_MODE ?
            changeThemeMode(ThemeModeType.LIGHT_MODE) : changeThemeMode(ThemeModeType.DARK_MODE)
    }

    return (
        <div className={`${styles.container} ${themeMode === ThemeModeType.LIGHT_MODE ? "border-bottom_light-mode" : ""} `}>
            <div className={styles.logoContainer}>
                <Icon icon="icon-park-outline:graphic-design-two"
                    className={`${styles.logo} ${themeMode === ThemeModeType.LIGHT_MODE ? styles.logoLight : ""}`}
                    onClick={handleLogoClicked} />
            </div>
            <div className={`${styles.logoNameContainer} ${extendedMenu ? styles.logoNameContainerExpanded : ""}`}>
                <h4 className={`${styles.logoName} ${extendedMenu ? styles.logoNameExpanded : ""}
                ${themeMode === ThemeModeType.LIGHT_MODE ? "menu-msgs-light-mode" : ""}`}>
                    Aceagency.design
                </h4>
            </div>
        </div>
    )
}

export default Logo;