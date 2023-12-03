import { GridPageSelector } from "./PageSelector"
import styles from "./../grid.module.css"
// import { LimitSelector } from "./LimitSelector"

export const GridFooter = () => {
    return (
        <div className={styles.grid__footer__wrapper}>
            {/* <LimitSelector /> */}
            {/* <div className={styles.division__component__grid} /> */}
            <GridPageSelector />
        </div>
    )
}
