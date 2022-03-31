import styles from "./poster.module.css"
export function Poster({name,link}){
    return(
        <div>
            <img src={link} 
            alt="#" width={'250px'} height={"250px"} />
            <p className={styles.poster_name} >{name}</p>
            <p className={styles.poster_desc} style={{color:"gray"}}>PRODUCT MANAGER</p>
        </div>
    )
} 