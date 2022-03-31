import styles from "./features.module.css"
export function Features(){
    return(
        <div className={styles.features__baap} id="features">
            <div className={styles.heading}>Our Features</div>
            <div className={styles.features_content}>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. <br /> Minus minima neque tempora reiciendis.</div>
                <div className={styles.features_main}>

                <div className={styles.features_left}>
                    <img src="https://preview.colorlib.com/theme/nitro/images/xslide_3.jpg.pagespeed.ic.T0Xhpzw9TM.webp"
                     alt="#" width={"500px"} />
                </div>
                <div className={styles.features_right}>
                    <div className={styles.heading}>Take Your Business <br /> Online</div>
                    <div className={styles.content_right}>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    <br />
                    <br />
                    Lorem Ipsum is simply   dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been <br /> the industry's

                    </div>
                    <button className={styles.features__rightBtn}>Learn More</button>

                     </div>
                </div>

        </div>
    )
}