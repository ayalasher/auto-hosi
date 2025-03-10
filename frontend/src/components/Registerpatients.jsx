import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import hall1 from "../Images/hospitalhall1.jpg";

export default function Registerpatients() {
  const [patientdata, setPatientdata] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    phone_number: "",
  });

  function onsubmit(e) {
    e.preventDefault();
  }

  async function registerpatient() {
    try {
      const response = await axios.post(
        "http://localhost:8000/patient/patientregistration/",
        patientdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setPatientdata({
        firstname: "",
        lastname: "",
        age: "",
        gender: "",
        phone_number: "",
      })
      // alert("Patient registered");
    } catch (error) {
      console.log("Error", error);
    }
    // alert("registering patient");
  }
  return (
    <div className={styles.registerpatientspage}>
      <div className={styles.rgptopsection}>
        <div className={styles.rgtstext}>
          <h1>Tumaini hospital</h1>
          <p>Register patient</p>
        </div>
        <div className={styles.rgtsimg}>
          {" "}
          <img
            className={styles.hallimage1}
            src={hall1}
            alt="Hall"
            title="Hall"
          />{" "}
        </div>
      </div>
      <div className={styles.formsection}>
        <h3>Patient registration form</h3>
        <form onSubmit={onsubmit}>
          <fieldset className={styles.rgformfieldset}>
            <div className={styles.rparea0}>
              <div className={styles.labeldiv}>
                <label htmlFor="">Name</label>
              </div>
              <div>
                <input
                  placeholder="First name"
                  required
                  value={patientdata.firstname}
                  className={styles.rginput}
                  type="text"
                  onChange={(e) =>
                    setPatientdata({
                      ...patientdata,
                      firstname: e.target.value,
                    })
                  }
                />
                <input
                  placeholder="Last name"
                  required
                  value={patientdata.lastname}
                  className={styles.rginput}
                  type="text"
                  onChange={(e) =>
                    setPatientdata({ ...patientdata, lastname: e.target.value })
                  }
                />
              </div>
            </div>
            <div className={styles.rparea0}>
              <div className={styles.labeldiv}>
                <label htmlFor="">Age </label>
                <label htmlFor="">Gender</label>
              </div>
              <div>
                <input
                  placeholder="Enter age"
                  className={styles.rginput}
                  value={patientdata.age}
                  required
                  type="number"
                  onChange={(e) =>
                    setPatientdata({ ...patientdata, age: e.target.value })
                  }
                />
                <select
                  onChange={(e) =>
                    setPatientdata({ ...patientdata, gender: e.target.value })
                  }
                  className={styles.rginput}
                  value={patientdata.gender}
                  name="Gender"
                  id="Gender"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className={styles.rparea0}>
              <div className={styles.labeldiv}>
                <label htmlFor="">Phone number</label>
              </div>
              <div>
                <input
                  placeholder="+254"
                  required
                  className={styles.rginput}
                  value={patientdata.phone_number}
                  type="tel"
                  // value={+254}
                  onChange={(e) =>
                    setPatientdata({
                      ...patientdata,
                      phone_number: e.target.value,
                    })
                  }
                />
                <button
                  type="submit"
                  onClick={registerpatient}
                  className={styles.registerbtn}
                >
                  Register
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
