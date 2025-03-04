import styles from "./styles.module.css";
import { FaHospitalUser } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { FaCalendarPlus } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";

export default function Sidebar() {
  return (
    <div className={styles.middlesection}>
      <div className={styles.somesection0}>
        <div className={styles.somesection}>
          <FaHospitalUser size={25} />
          <p className={styles.sidebartxt}>Patients</p>
        </div>
        <div className={styles.somesection}>
          <TiUserAdd size={25} />
          <p className={styles.sidebartxt}>Register Patients</p>
        </div>
        <div className={styles.somesection}>
          <FaCalendarPlus size={25} />
          <p className={styles.sidebartxt}>My Appointments</p>
        </div>
        <div className={styles.somesection}>
          <GiSpanner size={25} />
          <p className={styles.sidebartxt}>Tech Support</p>
        </div>
      </div>

      <div>
        <p>Testing hapa kule</p>
      </div>
    </div>
  );
}
