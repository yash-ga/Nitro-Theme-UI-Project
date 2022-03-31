import styles from "./home.module.css";
import { HashLink } from "react-router-hash-link";
export function Home() {
  return (
    <div className={styles.cont}>
      <div className={styles.main}>
        <h1>
          Nitro <span>.</span>
        </h1>
        <nav>
          {/* <div className="navside"> */}
          <HashLink to="#home">
            <p>Home</p>
          </HashLink>
          <HashLink to="#about" smooth={true}>
            <p>About Us</p>
          </HashLink>
          <HashLink to="#portfolio" smooth={true}>
            <p>Portfolio</p>
          </HashLink>
          <HashLink to="#features" smooth={true}>
            <p>Services</p>
          </HashLink>
          <HashLink to="#team" smooth={true}>
            <p>Team</p>
          </HashLink>
          <HashLink to="#contact" smooth={true}>
            <p>Contact</p>
          </HashLink>

          {/* </div> */}
        </nav>
      </div>
      <hr />
      <div className={styles.welcome}>
        <div className={styles.welcomeh1}>
          <div id="home">
            <h1>WELCOME</h1>
          </div>
          <div className={styles.welcomeBelow}>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              soluta eius error.
            </h2>
            <button>Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
