import styles from "./styles.module.css"
import { useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

export default function Patient() {

    const location = useLocation();

    const { USERDATA } = location.state || {}

    return <div className={styles.singlepatientsection} >
        <div className={styles.patienttopsection} >
            <div className={styles.aninnerdiv0} > <h2>Patient data</h2></div>
        </div>
        <div>
            {/* <h3>Personal data</h3> */}
            {USERDATA ? <div className={styles.introuserdatadiv} >
                <div className={styles.IOYRTEE} > <b>First name: </b> <p>{USERDATA.first_name}</p> </div>
                <div className={styles.IOYRTEE} ><b>Last name: </b>  <p>{USERDATA.last_name}</p>  </div>
                <div className={styles.IOYRTEE} ><b>Age: </b> <p>{USERDATA.age}</p>  </div>
                <div className={styles.IOYRTEE} ><b>Gender: </b> <p>{USERDATA.gender}</p>  </div>
                <div className={styles.IOYRTEE} ><b>Registered on: </b> <p>{USERDATA.registration_date}</p>  </div>
                <div className={styles.IOYRTEE} ><b>Patient ID: </b> <p>{USERDATA.uniqueidetifier}</p>  </div>
                {/* <p>Data fetched succesfully</p> */}
            </div> : <div className={styles.patientspageagain} ><p>Search for a patient to get the patients data</p></div>}
        </div>
    </div>
}