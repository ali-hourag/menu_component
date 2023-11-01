import { Icon } from "@iconify/react/dist/iconify.js";
import { useExtendedMenuContext } from "../../utils/hooks/useExtendedMenuContext";
import styles from "./topBtns.module.css";

const TopBtns = () => {

    const { extendedMenu, changeExtendedMenu } = useExtendedMenuContext();

    const handleUnextendClicked = () => { if (extendedMenu) changeExtendedMenu() }

    return (
        <div className={`${styles.container} ${extendedMenu ? styles.extendedContainer : ""}`}>
            <div className={styles.btnsContainer}>
                <span className={`${styles.closeBtn} ${styles.topBtn}`}></span>
                <span className={`${styles.minimizeBtn} ${styles.topBtn}`}></span>
                <span className={`${styles.zoomBtn} ${styles.topBtn}`}></span>
            </div>
            <div className={styles.unextendTopIconContainer}>
                <span className={`${styles.unextendIconContainer} 
                ${!extendedMenu ? styles.unextendContainerDisplay : ""}`}
                    onClick={handleUnextendClicked}
                >
                    <Icon icon="ion:caret-back-outline"
                        className={styles.unextendedIcon}
                    />
                </span>
            </div>
        </div >
    )
}

export default TopBtns;