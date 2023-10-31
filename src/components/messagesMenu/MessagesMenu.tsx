import { ThemeModeType } from "../../context/ThemeModeContextProvider";
import { useThemeModeContext } from "../../utils/hooks/useThemeModeContext";
import { Icon } from '@iconify/react';
import styles from "./messagesMenu.module.css";
import { useEffect, useState } from "react";
import { UserType } from "../../types/user";
import { getUsers } from "../../api/fetchUsers";
import { ClipLoader } from "react-spinners";

const MessagesMenu = () => {

    const [users, setUsers] = useState<UserType[] | null>();
    const { themeMode } = useThemeModeContext();

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
            <div className={styles.messagesContainer}>
                <div className={`${styles.profilesContainer} 
                ${themeMode === ThemeModeType.LIGHT_MODE ? styles.profilesContainerLightMode : ""}`}>
                    {users ?
                        users.map((user, index) => (
                            <div key={index} className={`${styles.profileUserContainer} 
                            ${themeMode === ThemeModeType.LIGHT_MODE ? styles.profileUserContainerLightMode : ""}`}>
                                <img src={user.profile_picture} className={styles.img} />
                            </div>
                        ))
                        :
                        <ClipLoader color="white" className={styles.loader} />
                    }
                </div>
                <div className={styles.messagesExtender}>
                    <Icon icon="octicon:triangle-down-24" className={styles.arrowIcon} />
                </div>
            </div>
        </div>
    )
}

export default MessagesMenu;