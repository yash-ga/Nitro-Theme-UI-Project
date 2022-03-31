import { Poster } from "./Poster"
import styles from "./team.module.css"
export function Team(){
    return(
        <div className={styles.team__main} id="team">
            <div className={styles.team_heading}>Our team</div>
            <div className={styles.team_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                <br /> Minus minima neque tempora reiciendis.</div>

                <div className={styles.r1}>
                    <Poster link="https://preview.colorlib.com/theme/nitro/images/xperson_5.jpg.pagespeed.ic.70eErTeu-L.webp" name={"KC Juli"}/>
                    <Poster link="	https://preview.colorlib.com/theme/nitro/images/xperson_6.jpg.pagespeed.ic.SXHpVGMa7g.webp" name={"Dave Smite"}/>
                    <Poster link={"https://preview.colorlib.com/theme/nitro/images/xperson_7.jpg.pagespeed.ic.sAuv9jH-0q.webp"} name={"Louis Willson"}/>
                    <Poster link={"https://preview.colorlib.com/theme/nitro/images/xperson_8.jpg.pagespeed.ic.ED5TdJSYic.webp"} name={"Idont Know"}/>

                </div>
                <div className={styles.r1}>
                    <Poster link="https://preview.colorlib.com/theme/nitro/images/xperson_5.jpg.pagespeed.ic.70eErTeu-L.webp" name={"KC Juli"}/>
                    <Poster link="https://preview.colorlib.com/theme/nitro/images/xperson_6.jpg.pagespeed.ic.SXHpVGMa7g.webp" name={"Dave Smite"}/>
                    <Poster link={"https://preview.colorlib.com/theme/nitro/images/xperson_7.jpg.pagespeed.ic.sAuv9jH-0q.webp"} name={"Louis Willson"}/>
                    <Poster link={"https://preview.colorlib.com/theme/nitro/images/xperson_8.jpg.pagespeed.ic.ED5TdJSYic.webp"} name={"Idont Know"}/>

                </div>
                <hr style={{color:"black", padding:"40px"}} />
        </div>
    )
}