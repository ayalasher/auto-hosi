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
            {USERDATA ? "Data fetched succesfully" : "Error sending data using navigate"}
        </div>
    </div>
}