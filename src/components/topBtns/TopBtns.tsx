import styles from "./topBtns.module.css";

const TopBtns = () => {
    return (
        <div className={styles.container}>
            <span className={`${styles.closeBtn} ${styles.topBtn}`}></span>
            <span className={`${styles.minimizeBtn} ${styles.topBtn}`}></span>
            <span className={`${styles.zoomBtn} ${styles.topBtn}`}></span>
        </div>
    )
}

export default TopBtns;