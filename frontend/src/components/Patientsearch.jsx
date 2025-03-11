import styles from "./styles.module.css"
import { useState } from "react"
import axios from "axios"

export default function Patientsearch() {

    const [searchdata, setSearchData] = useState({
        firstname: "",
        lastname: "",
    })


    return <div className={styles.singlepatientsection} >
        <div className={styles.patienttopsection} >
            <div className={styles.aninnerdiv0} > <h2>Patient Search</h2></div>
            <div className={styles.aninnerdiv} >
                <input title="First name" placeholder="Enter first name" type="text" />
                <input title="Last name" placeholder="Enter last name" type="text" />
                <button className={styles.loginsignupbutton} >Search</button>
            </div>

        </div>
    </div>
}