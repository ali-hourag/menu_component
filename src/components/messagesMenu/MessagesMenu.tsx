import { ThemeModeType } from "../../context/ThemeModeContextProvider";
import { useThemeModeContext } from "../../utils/hooks/useThemeModeContext";
import { Icon } from '@iconify/react';
import styles from "./messagesMenu.module.css";

const MessagesMenu = () => {

    const { themeMode } = useThemeModeContext();

    return (
        <div className={styles.container}>
            <h5 className={`${styles.title} ${themeMode === ThemeModeType.LIGHT_MODE ? styles.messagesLightMode : ""}`}>
                MESSAGES
            </h5>
            <div className={styles.messagesContainer}>
                <div className={`${styles.profilesContainer} ${themeMode === ThemeModeType.LIGHT_MODE ? styles.profilesContainerLightMode : ""}`}>

                </div>
                <div className={styles.messagesExtender}>
                    <Icon icon="octicon:triangle-down-24" className={styles.arrowIcon} />
                </div>
            </div>
        </div>
    )
}

export default MessagesMenu;