import { useEffect, useState } from "react";
import { getUsers } from "../../api/fetchUsers";
import { UserType } from "../../types/user";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./profileMenu.module.css";
import { useThemeModeContext } from "../../utils/hooks/useThemeModeContext";
import { useExtendedMenuContext } from "../../utils/hooks/useExtendedMenuContext";
import { ThemeModeType } from "../../context/ThemeModeContextProvider";

const ProfileMenu = () => {

    const [currentUser, setCurrentUser] = useState<UserType | null>();
    const { themeMode } = useThemeModeContext();
    const { extendedMenu } = useExtendedMenuContext();

    useEffect(() => {
        (async function getUser() {
            const user = await getUsers(0, 1);

            if (typeof user !== "boolean") {
                setCurrentUser(user[0])
            }
        }())
    }, [])

    return (
        <div className={styles.container}>
            {currentUser ?
                <>
                    <div className={styles.profilePictureContainer}>
                        <img src={currentUser?.profile_picture} className={styles.image} />
                    </div>
                    <div className={`${styles.userInfoContainer} 
                    ${extendedMenu ? styles.userInfoContainerExpanded : ""}
                    ${themeMode === ThemeModeType.LIGHT_MODE ? styles.userInfoLightMode : ""}`}>
                        <h4 className={styles.userInfoName}>{currentUser.first_name} {currentUser.last_name}</h4>
                        <p className={styles.userInfoRole}>Full Stack Developer</p>
                    </div>
                </>
                :
                <ClipLoader color="white" />
            }
        </div>
    )
}

export default ProfileMenu;