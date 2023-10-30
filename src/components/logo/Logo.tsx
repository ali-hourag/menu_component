import { Icon } from '@iconify/react';
import styles from "./logo.module.css";
import { useThemeModeContext } from '../../utils/hooks/useThemeModeContext';
import { ThemeModeType } from '../../context/ThemeModeContextProvider';


const Logo = () => {
    const { themeMode } = useThemeModeContext();

    return (
        <div className={styles.container}>
            <Icon icon="icon-park-outline:graphic-design-two"
                className={`${styles.logo} ${themeMode === ThemeModeType.LIGHT_MODE ? styles.logoLight : ""}`} />
        </div>
    )
}

export default Logo;