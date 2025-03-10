import styles from "./styles.module.css";
import axios from "axios";
import patient1 from "../Images/patient1.jpg"

export default function Patients() {
  return (
    <div className={styles.patientssection}  >
      <div className={styles.ptopsetion} >
        <div className={styles.ptxtdiv} ><h3>Patients</h3></div>
        <div className={styles.pimgdiv} >
          <img className={styles.pimagestyle} src={patient1} alt="Patient" title="Patient" />
        </div>
      </div>

      <div className={styles.pmiddlesection} >

      </div>

    </div>
  );
}
