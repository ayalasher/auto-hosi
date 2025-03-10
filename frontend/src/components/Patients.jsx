import styles from "./styles.module.css";
import axios from "axios";
import patient1 from "../Images/patient1.jpg"
import { useState, useEffect } from "react";

export default function Patients() {
  const [isLoading, setIsloading] = useState(true)


  useEffect(() => {
    axios.get("http://localhost:8000/patient/patientslist/").then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(`Error:${error}`);

    })

  }, [])


  return (
    <div className={styles.patientssection}  >
      <div className={styles.ptopsetion} >
        <div className={styles.ptxtdiv} ><h3>Patients</h3></div>
        <div className={styles.pimgdiv} >
          <img className={styles.pimagestyle} src={patient1} alt="Patient" title="Patient" />
        </div>
      </div>

      <div className={styles.pmiddlesection} >
        <div className={styles.titleststdiv} >
          <p>First name</p>
          <p>Last name</p>
          <p>Age</p>
          <p>Gender</p>
          <p>Phone number</p>
        </div>
      </div>

    </div>
  );
}
