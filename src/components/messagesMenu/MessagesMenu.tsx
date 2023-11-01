import { ThemeModeType } from "../../context/ThemeModeContextProvider";
import { useThemeModeContext } from "../../utils/hooks/useThemeModeContext";
import { Icon } from '@iconify/react';
import styles from "./messagesMenu.module.css";
import { useEffect, useState } from "react";
import { UserType } from "../../types/user";
import { getUsers } from "../../api/fetchUsers";
import { ClipLoader } from "react-spinners";
import { useExtendedMenuContext } from "../../utils/hooks/useExtendedMenuContext";

const MessagesMenu = () => {

    const [users, setUsers] = useState<UserType[] | null>();
    const { themeMode } = useThemeModeContext();
    const { extendedMenu, changeExtendedMenu } = useExtendedMenuContext();

    const handleProfileImgClicked = () => {
        if (!extendedMenu) changeExtendedMenu();
    }

    useEffect(() => {
        (async function getUsersApi() {
            const user = await getUsers(10, 4);

            if (typeof user !== "boolean") {
                setUsers(user)
            }
        }())
    }, [])

    return (
        <div className={styles.container}>
            <h5 className={`${styles.title} 
            ${themeMode === ThemeModeType.LIGHT_MODE ? "menu-msgs-light-mode" : ""}`}>
                MESSAGES
            </h5>
            <div className={`${styles.messagesContainer} ${extendedMenu ? styles.messagesContainerExtended : ""}`}>
                <div className={`${styles.profilesContainer} 
                ${themeMode === ThemeModeType.LIGHT_MODE ? styles.profilesContainerLightMode : ""}
                ${extendedMenu ? styles.profilesContainerExtended : ""}`}>
                    {users ?
                        users.map((user, index) => (
                            <div key={index} className={`${styles.profileUserContainer} 
                            ${extendedMenu ? styles.profileUserContainerExtended : ""}`}>
                                <div className={styles.porfilePictureEntryContainer}>
                                    <div className={`${styles.porfilePictureContainer}  ${index !== users.length - 1 ? styles.profileBorderBottom : ""}`}>
                                        <img src={user.profile_picture} className={styles.img} onClick={handleProfileImgClicked} />
                                    </div>
                                </div>
                                <div className={`${styles.username} 
                                ${extendedMenu ? styles.usernameExtended : ""}`}>
                                    <div className={`${styles.messagingContainer} 
                                    ${extendedMenu ? styles.messagingContainerExtended : ""}
                                    ${index === users.length - 2 ? styles.showMessaging : ""}`}>
                                        <span className={styles.messagingDot}></span>
                                        <span className={styles.messagingDot}></span>
                                        <span className={styles.messagingDot}></span>
                                    </div>
                                    <div className={`${styles.messageProfileName}
                                    ${extendedMenu ? styles.messageProfileNameExtended : ""}
                                    ${themeMode === ThemeModeType.LIGHT_MODE ? "menu-msgs-light-mode" : ""}`}>
                                        <p>{user.first_name} {user.last_name}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <ClipLoader color="white" className={styles.loader} />
                    }
                </div>
                <div className={`${styles.messagesExtender}
                ${extendedMenu ? styles.messagesExtenderExtended : ""}`}>
                    <Icon icon="octicon:triangle-down-24" className={styles.arrowIcon} />
                </div>
            </div>
        </div>
    )
}

export default MessagesMenu;