import styles from "./styles.module.css"
import { useState } from "react"
import axios from "axios"

export default function Patient() {

    const [searchdata, setSearchData] = useState({
        firstname: "",
        lastname: "",
    })


    return <div>
        <div className={styles.patienttopsection} >
            <div><h2>Patient data</h2></div>
            <div className={styles.aninnerdiv} >
                <input type="text" />
                <button className={styles.loginsignupbutton} >Search</button>
            </div>

        </div>
    </div>
}