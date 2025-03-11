import styles from "./styles.module.css"
import { useState } from "react"
import axios from "axios"

export default function Patientsearch() {

    const [searchdata, setSearchData] = useState({
        firstname: "",
        lastname: "",
    })

    const [searched, setSerached] = useState(false)

    async function patientSearch() {
        try {
            const response = await axios.post("http://localhost:8000/patient/patient-search /", searchdata, {
                headers: {
                    "Content-Type": "appication/json"
                }
            })
            setSerached(true)
            console.log(response.data);

        } catch (error) {
            console.log("Error", error);

        }
        // alert("Searching for the patient")

    }


    return <div className={styles.singlepatientsection} >
        <div className={styles.patienttopsection} >
            <div className={styles.aninnerdiv0} > <h2>Patient Search</h2></div>
            <div className={styles.aninnerdiv} >
                <input value={searchdata.firstname} onChange={(e) => setSearchData({ ...searchdata, firstname: e.target.value })} className={styles.inputsstyling} title="First name" placeholder="Enter patient first name" type="text" />
                <input value={searchdata.lastname} onChange={(e) => setSearchData({ ...searchdata, lastname: e.target.value })} className={styles.inputsstyling} title="Last name" placeholder="Enter patient last name" type="text" />
                <button onClick={patientSearch} className={styles.loginsignupbutton} >Search</button>
            </div>

        </div>
        <div>
            <p>{searched ? "Search results" : "You have not searched for any Patient  data"}</p>
        </div>
    </div>
}