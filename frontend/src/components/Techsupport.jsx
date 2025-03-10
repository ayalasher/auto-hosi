import styles from "./styles.module.css";
import { MdOutlineContactPhone } from "react-icons/md";

export default function Techsupport() {
  return (
    <div className={styles.techsupportsection} >
      {/* <p> tech Support</p> */}
      <h3>Contact me</h3>
      <MdOutlineContactPhone size={25} color="black" />
      <p>0745405309</p>
      <div className={styles.footerstyling} >
        <div className={styles.footercontent} ><p>
          <b>Developed by :</b> maxwel ayal asher © 2025 </p></div>
      </div>
    </div>
  );
}
