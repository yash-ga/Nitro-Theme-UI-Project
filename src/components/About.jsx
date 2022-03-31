import styles from "./about.module.css"
import { AiOutlineCheck } from "react-icons/ai";
export function About(){
    return(
        <div className={styles.about_cont} id="about">
            <h1 className={styles.about_heading}>About Us</h1>

        <div className={styles.about_main}>

            
            <div className={styles.left}>

            <img src="https://preview.colorlib.com/theme/nitro/images/xhero_1.jpg.pagespeed.ic.54htOpCzCY.webp" alt="#" 
            width={"500px"} />

            </div>
            <div className={styles.right}>
                <div className={styles.content}>

                <div className={styles.contentH1}>For the next great business</div>

                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quo tempora cumque eligendi in nostrum labore omnis quaerat.</h4>
            <li>
                <AiOutlineCheck className={styles.check} />Officia quaerat eaque neque
                <br />
                <AiOutlineCheck className={styles.check} />Officia quaerat eaque neque
                <br />
                <AiOutlineCheck className={styles.check} />Officia quaerat eaque neque
                <br />
                <AiOutlineCheck className={styles.check} />Officia quaerat eaque neque
                {/* <AiFillApple/> */}
            </li>

                </div>
            </div>
        </div>
            </div>
    )
}