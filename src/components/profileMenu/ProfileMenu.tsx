import { useEffect, useState } from "react";
import { getUsers } from "../../api/fetchUsers";
import { UserType } from "../../types/user";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "./profileMenu.module.css";

const ProfileMenu = () => {

    const [currentUser, setCurrentUser] = useState<UserType | null>();

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
                <img src={currentUser?.profile_picture} className={styles.image} />
                :
                <ClipLoader color="white" />
            }
        </div>
    )
}

export default ProfileMenu;