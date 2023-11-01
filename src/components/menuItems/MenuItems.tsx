import { Icon } from '@iconify/react';
import styles from "./menuItems.module.css";
import { useThemeModeContext } from '../../utils/hooks/useThemeModeContext';
import { ThemeModeType } from '../../context/ThemeModeContextProvider';
import { iconsArray } from '../assets/data/iconsArray';

const MenuItems = () => {

    const { themeMode } = useThemeModeContext();

    const handleMouseOverMenuIcon = (iconPosition: number, isEntering: boolean) => {
        const iconLabelContainer: (HTMLDivElement | null) = document.querySelector(`#menu-icons_entry-${iconPosition + 1} #icon-label-container`);
        const iconLabel: (HTMLDivElement | null) = document.querySelector(`#menu-icons_entry-${iconPosition + 1} #icon-label`);
        if (iconLabelContainer && iconLabel) {
            if (isEntering) {
                iconLabelContainer.style.opacity = "1";
                iconLabel.style.left = "10px";
            } else {
                iconLabelContainer.style.opacity = "0";
                iconLabel.style.left = "-200px";
            }
        }
    }

    return (
        <div className={`${styles.container} ${themeMode === ThemeModeType.LIGHT_MODE ? "border-bottom_light-mode" : ""} `}>
            <div className={styles.titleContainer}>
                <h5 className={`${styles.title} ${themeMode === ThemeModeType.LIGHT_MODE ? "menu-msgs-light-mode" : ""}`}>
                    MENU
                </h5>
            </div>
            {iconsArray.map((icon, index) => (
                <div id={`menu-icons_entry-${index + 1}`} className={styles.menuIconContainer} key={index}>
                    <div className={styles.iconContainer}>
                        <Icon icon={icon.iconName} hFlip={true}
                            className={`${styles.menuIcon} ${themeMode === ThemeModeType.LIGHT_MODE ? "menu-msgs-light-mode" : ""}`}
                            onMouseEnter={() => handleMouseOverMenuIcon(index, true)}
                            onMouseLeave={() => handleMouseOverMenuIcon(index, false)}
                        />
                    </div>
                    <div id="icon-label-container" className={styles.iconLabelContainer}>
                        <p id="icon-label" className={styles.iconLabel}>{icon.iconLabel}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MenuItems;