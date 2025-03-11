import styles from "./styles.module.css"
import { useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Patientsearch() {
    const [searchresults, setSearchresults] = useState({})
    const [searchdata, setSearchData] = useState({
        firstname: "",
        lastname: "",
    })
    const [searched, setSerached] = useState(false)

    const navigateto = useNavigate();


    function navigatetopatientscreen() {

        navigateto("/Home/patient", {
            state: {
                USERDATA: searchresults
            }
        })
    }

    async function patientSearch() {
        try {
            const response = await axios.post("http://localhost:8000/patient/patient-search /", searchdata, {
                headers: {
                    "Content-Type": "appication/json"
                }
            })
            setSearchresults(response.data)
            setSerached(true)
            // console.log(response.data);
            setSearchData({
                firstname: "",
                lastname: "",
            })

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
        <div className={styles.somemaindiv} >
            <div className={styles.thesearchresults} >{searched ? <div className={styles.searchresultslink} >
                <p className={styles.linktxt} > {searchresults.userdata.first_name} </p>
                <p className={styles.linktxt}  >  {searchresults.userdata.last_name} </p>
                <p className={styles.linktxt}   > {searchresults.userdata.age} </p>
                <p className={styles.linktxt}  > {searchresults.userdata.gender} </p>
                <p className={styles.linktxt}  > {searchresults.userdata.registration_date} </p>
                <button onClick={navigatetopatientscreen} className={styles.loginsignupbutton} >View patient </button>
            </div> : <p>You have not searched for any Patient  data</p>}</div>

        </div>
        {/* <button></button> */}
    </div>
}