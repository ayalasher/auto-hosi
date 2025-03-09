import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import hall1 from "../Images/hospitalhall1.jpg";

export default function Registerpatients() {
  return (
    <div className={styles.registerpatientspage}>
      <div className={styles.rgptopsection}>
        <div className={styles.rgtstext}>
          <h1>Tumaini hospital</h1>
          <h4>Patient registration form</h4>
        </div>
        <div className={styles.rgtsimg}>
          {" "}
          <img className={styles.hallimage1} src={hall1} alt="Hal" />{" "}
        </div>
      </div>
    </div>
  );
}
