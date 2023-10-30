import { Icon } from '@iconify/react';
import styles from "./logo.module.css";
import { useThemeModeContext } from '../../utils/hooks/useThemeModeContext';
import { ThemeModeType } from '../../context/ThemeModeContextProvider';


const Logo = () => {
    const { themeMode, changeThemeMode } = useThemeModeContext();

    const handleLogoClicked = () => {
        themeMode === ThemeModeType.DARK_MODE ?
            changeThemeMode(ThemeModeType.LIGHT_MODE) : changeThemeMode(ThemeModeType.DARK_MODE)
    }

    return (
        <div className={styles.container}>
            <Icon icon="icon-park-outline:graphic-design-two"
                className={`${styles.logo} ${themeMode === ThemeModeType.LIGHT_MODE ? styles.logoLight : ""}`}
                onClick={handleLogoClicked} />
        </div>
    )
}

export default Logo;