import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import hall1 from "../Images/hospitalhall1.jpg";

export default function Registerpatients() {
  const patientdata = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    phone_number: "",
  });

  function onsubmit(e) {
    e.preventDefault();
  }

  function registerpatient() {
    alert("registering patient");
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
                  className={styles.rginput}
                  type="text"
                  name=""
                  id=""
                />
                <input
                  placeholder="Second name"
                  className={styles.rginput}
                  type="text"
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
                  type="text"
                  name=""
                  id=""
                />
                {/* <input
                  placeholder="What is your gender"
                  className={styles.rginput}
                  type="text"
                /> */}
                <select className={styles.rginput} name="Gender" id="Gender">
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
                  className={styles.rginput}
                  type="text"
                  name=""
                  id=""
                />
                <button
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
