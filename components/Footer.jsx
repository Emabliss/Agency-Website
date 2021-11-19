import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>PH0ENIX CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref className={styles.link}>
            <>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image src="/img/link.png" width="40px" height="40px" alt="" />
            </>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          4 TARRED ROAD <br /> LAGOS
        </div>
        <div className={styles.cardItem}>
          CONTACT@EMMY.DEV <br />
          +234 8065607930
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US <br /> _FB _IN _BE _TW
        </div>
        <div className={styles.cardItem}>
          &copy; 2022 EMMY INTERACTIVE <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
