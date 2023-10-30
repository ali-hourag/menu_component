import { Icon } from '@iconify/react';
import styles from "./menuItems.module.css";

const MenuItems = () => {
    return (
        <div className={styles.container}>
            <h5>Menu</h5>
            <Icon icon="solar:suitcase-bold" />
            <Icon icon="solar:suitcase-bold" />
            <Icon icon="solar:suitcase-bold" />
            <Icon icon="solar:suitcase-bold" />
            <Icon icon="solar:suitcase-bold" />
            <Icon icon="solar:suitcase-bold" />
        </div>
    )
}

export default MenuItems;