import { Icon } from '@iconify/react';
import styles from "./menuItems.module.css";
import { useThemeModeContext } from '../../utils/hooks/useThemeModeContext';
import { ThemeModeType } from '../../context/ThemeModeContextProvider';
import { iconsArray } from '../assets/data/iconsArray';
import { useExtendedMenuContext } from '../../utils/hooks/useExtendedMenuContext';

const MenuItems = () => {

    const { themeMode } = useThemeModeContext();
    const { extendedMenu, changeExtendedMenu } = useExtendedMenuContext();

    const handleMouseOverMenuIcon = (iconPosition: number, isEntering: boolean) => {
        const iconLabelContainer: (HTMLDivElement | null) = document.querySelector(`#menu-icons_entry-${iconPosition + 1} #icon-label-container`);
        const iconLabel: (HTMLDivElement | null) = document.querySelector(`#menu-icons_entry-${iconPosition + 1} #icon-label`);
        if (iconLabelContainer && iconLabel && !extendedMenu) {
            if (isEntering) {
                iconLabelContainer.classList.add(styles.iconLabelContainerExtended);
                iconLabel.classList.add(styles.iconLabelMouseOver);
            } else {
                iconLabelContainer.classList.remove(styles.iconLabelContainerExtended);
                iconLabel.classList.remove(styles.iconLabelMouseOver);
            }
        }
    }

    const iconClicked = () => {
        if (!extendedMenu) changeExtendedMenu();
    }

    const handleMouseOverMenuEntry = (entry: number, isEnterig: boolean) => {
        const menuEntry: (HTMLDivElement | null) = document.querySelector(`#menu-icons_entry-${entry}`);
        if (menuEntry && extendedMenu) {
            if (isEnterig) {
                menuEntry.classList.add(styles.menuIconContainerHovered);
            } else menuEntry.classList.remove(styles.menuIconContainerHovered);
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
                <div id={`menu-icons_entry-${index + 1}`}
                    className={styles.menuIconContainer}
                    key={index}
                    onMouseEnter={() => handleMouseOverMenuEntry(index + 1, true)}
                    onMouseLeave={() => handleMouseOverMenuEntry(index + 1, false)}
                >
                    <div className={styles.iconContainer}>
                        <Icon icon={icon.iconName} hFlip={true}
                            className={`${styles.menuIcon} ${themeMode === ThemeModeType.LIGHT_MODE ? "menu-msgs-light-mode" : ""}`}
                            onMouseEnter={() => handleMouseOverMenuIcon(index, true)}
                            onMouseLeave={() => handleMouseOverMenuIcon(index, false)}
                            onClick={iconClicked}
                        />
                    </div>
                    <div id="icon-label-container" className={`${styles.iconLabelContainer} 
                    ${extendedMenu ? styles.iconLabelContainerExtended : ""}`}>
                        <p id="icon-label" className={`
                        ${extendedMenu ? styles.iconLabelExtended : styles.iconLabel}
                        ${themeMode === ThemeModeType.LIGHT_MODE && extendedMenu ? "menu-msgs-light-mode" : ""}`}>
                            {icon.iconLabel}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MenuItems;