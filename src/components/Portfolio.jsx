import styles from "./portfolio.module.css";
import { AiOutlineSearch } from "react-icons/ai";
export function Portfolio() {
  return (
    <div className={styles.portfolio__main} id="portfolio">
      <p className={styles.portfolio__heading}>Portfolio</p>
      <div className={styles.portfolio__btnDiv}>
        <button className={styles.portfolio__btnAll}>All</button>
        <button className={styles.portfolio__btn}>Web</button>
        <button className={styles.portfolio__btn}>Design</button>
        <button className={styles.portfolio__btn}>Brand</button>
      </div>
      {/* main images div */}
      <div className={styles.portfolio__images}>
          {/* div to handle each column */}
        <div className={styles.portfolio__c1}>
          <img
            src="https://preview.colorlib.com/theme/nitro/images/ximg_1.jpg.pagespeed.ic.m09NyM_s7e.webp"
            alt="#"
            width={"240px"}
            height={"262px"}
          />

          <img
            src="https://preview.colorlib.com/theme/nitro/images/ximg_3.jpg.pagespeed.ic.SxHViLCtT7.webp"
            alt="#"
            width={"240px"}
            height={"360px"}
          />

          <img
            src="https://preview.colorlib.com/theme/nitro/images/ximg_11.jpg.pagespeed.ic.7CVJrJE5iv.webp"
            alt="#"
            width={"240px"}
            height={"360px"}
          />
        </div>

        <div className={styles.portfolio__c1}>
          <img
            src="https://preview.colorlib.com/theme/nitro/images/ximg_7.jpg.pagespeed.ic.qiBmnhPUIO.webp"
            alt="#"
            width={"240px"}
            height={"140px"}
          />

          <img
            src="https://preview.colorlib.com/theme/nitro/images/img_5.jpg"
            alt="#"
            width={"240px"}
            height={"460px"}
          />

          <img
            src="https://preview.colorlib.com/theme/nitro/images/ximg_6.jpg.pagespeed.ic.HSjMu6RBmV.webp"
            alt="#"
            width={"240px"}
            height={"315px"}
          />
        </div>

        <div className={styles.portfolio__c1}>
          <div className={styles.test}>
            <img
              src="https://preview.colorlib.com/theme/nitro/images/ximg_4.jpg.pagespeed.ic.i634CLO5RR.webp"
              alt="#"
              width={"240px"}
              height={"291px"}
            />
            <div className={styles.overlay}>
              <div className={styles.text}>
                <AiOutlineSearch />
              </div>
            </div>
          </div>
          <div className={styles.test}>
            <img
              src="https://preview.colorlib.com/theme/nitro/images/ximg_12.jpg.pagespeed.ic.x-L3EfFEMM.webp"
              alt="#"
              width={"240px"}
              height={"140px"}
            />
          </div>
          <div className={styles.test}>
            <img
              src="https://preview.colorlib.com/theme/nitro/images/ximg_10.jpg.pagespeed.ic.ncBAfzEhG5.webp"
              alt="#"
              width={"240px"}
              height={"140px"}
            />
          </div>
          <div className={styles.test}>
            <img
              src="https://preview.colorlib.com/theme/nitro/images/ximg_8.jpg.pagespeed.ic.JsoXFKzlC2.webp"
              alt="#"
              width={"240px"}
              height={"150px"}
            />
          </div>
        </div>

        <div className={styles.portfolio__c1}>
          <img
            src=" https://preview.colorlib.com/theme/nitro/images/ximg_9.jpg.pagespeed.ic.Bgnl8_YCTk.webp"
            alt="#"
            width={"240px"}
            height={"375px"}
          />

          <img
            src="https://preview.colorlib.com/theme/nitro/images/ximg_12.jpg.pagespeed.ic.x-L3EfFEMM.webp"
            alt="#"
            width={"240px"}
            height={"140px"}
          />

          <img
            src="https://preview.colorlib.com/theme/nitro/images/ximg_8.jpg.pagespeed.ic.JsoXFKzlC2.webp"
            alt="#"
            width={"240px"}
            height={"150px"}
          />
          <img
            src="https://preview.colorlib.com/theme/nitro/images/ximg_13.jpg.pagespeed.ic.Wt7AMtJmYJ.webp"
            alt="#"
            width={"240px"}
            height={"150px"}
          />
        </div>
      </div>
    </div>
  );
}
