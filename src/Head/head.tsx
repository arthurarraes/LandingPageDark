import logo from "../assets/images/logo.svg"
import styles from "./head.module.css"

export function Head(){
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} />
            </div>
            <div className={styles.nav}>
                <a href="">Features</a>
                <a href="">Team</a>
                <a href="">Sign in</a>
            </div>
        </div>
    )
}