import styles from "./styles.module.css";
import { FaHospitalUser } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { FaCalendarPlus } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaUserInjured } from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();
  return (
    <div className={styles.middlesection}>
      <div className={styles.somesection0}>
        <Link to={"/Home/patient"} className={styles.somesection}>
          <FaUserInjured size={25} />
          <p className={styles.sidebartxt}>Patient</p>
        </Link>
        <Link to={"/Home/patients"} className={styles.somesection}>
          <FaHospitalUser size={25} />
          <p className={styles.sidebartxt}>Patients</p>
        </Link>
        <Link to={"/Home/register-patients"} className={styles.somesection}>
          <TiUserAdd size={25} />
          <p className={styles.sidebartxt}>Register Patients</p>
        </Link>
        <Link to={"/Home/appointments"} className={styles.somesection}>
          <FaCalendarPlus size={25} />
          <p className={styles.sidebartxt}>My Appointments</p>
        </Link>
        <Link to={"/Home/tech-support"} className={styles.somesection}>
          <GiSpanner size={25} />
          <p className={styles.sidebartxt}>Tech Support</p>
        </Link>
      </div>

      {/* <div className={styles.somesection0_2}> */}
      {/* <p>Testing hapa kule</p> */}
      {/* <p> {location.pathname} </p> */}
      {/* <p>Vindu vi collapsanga...</p> */}
      {/* </div> */}
    </div>
  );
}
