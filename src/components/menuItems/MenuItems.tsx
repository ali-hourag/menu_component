import { Icon } from '@iconify/react';
import styles from "./menuItems.module.css";
import { useThemeModeContext } from '../../utils/hooks/useThemeModeContext';
import { ThemeModeType } from '../../context/ThemeModeContextProvider';

const MenuItems = () => {

    const { themeMode } = useThemeModeContext();

    const iconsArray = ["solar:suitcase-bold", "icon-park-solid:notes", "ic:round-discount",
        "game-icons:graduate-cap", "mdi:security-lock", "mdi:thunder-circle"]

    return (
        <div className={`${styles.container} ${themeMode === ThemeModeType.LIGHT_MODE ? "border-bottom_light-mode" : ""} `}>
            <h5 className={`${styles.title} ${themeMode === ThemeModeType.LIGHT_MODE ? "menu-msgs-light-mode" : ""}`}>
                MENU
            </h5>
            {iconsArray.map((icon, index) => (
                <div className={styles.menuIconContainer} key={index}>
                    <Icon icon={icon} hFlip={true}
                        className={`${styles.menuIcon} ${themeMode === ThemeModeType.LIGHT_MODE ? "menu-msgs-light-mode" : ""}`} />
                </div>
            ))}
        </div>
    )
}

export default MenuItems;