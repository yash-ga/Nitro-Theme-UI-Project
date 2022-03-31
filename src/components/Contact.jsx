import styles from "./contact.module.css";
import { FcShare, FcPhone } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
export function Contact() {
  return (
    <div className={styles.contact__main} id="contact">
      <p className={styles.contact__heading}>Contact Us</p>
      <div className={styles.contact__info}>
        <div className={styles.Contact__locationDiv}>
          <FcShare />
          <p className={styles.Contact__location}>
            203 Fake St. Mountain View, San Francisco,
            {/* <br /> */}
            California, USA
          </p>
        </div>
        <div className={styles.contact__loaction}>
          <FcPhone />
          <p className={styles.contact__number}>+251 134 1212</p>
        </div>
        <div className={styles.contact__loaction}>
          <AiOutlineMail width={"10px"} height={"10px"} color={"blue"} />
          <p className={styles.contact__number}>youremail@domain.com</p>
        </div>
      </div>
      <div className={styles.contact__form}>
        <h3 className={styles.contact__formH}>Contact Form</h3>
        <div className={styles.FLname}>
          <div>
            <label>First Name</label>
            <br />
            <input type="text" className={styles.ifl} />
          </div>
          <div>
            <label>Last Name</label>
            <br />
            <input type="text" className={styles.ifl}/>
          </div>
        </div>
        <div>
            <label className={styles.email}>Email</label>
            <br />
            <input type="text" className={styles.einput}/>
        </div>
        <div>
            <label className={styles.email}>Subject</label>
            <br />
            <input type="text" className={styles.einput}/>
        </div>
        <div>
            <label className={styles.email}>Message</label>
            <br />
            <input type="text" className={styles.message} placeholder="Write your messsage here..."/>
        </div>
        <div>

        <button className={styles.sendMessageBtn}> Send Message</button>
        </div>
      </div>
    </div>
  );
}
