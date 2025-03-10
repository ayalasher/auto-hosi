import styles from "./styles.module.css";
import axios from "axios";
import patient1 from "../Images/patient1.jpg"
import { useState, useEffect } from "react";
import { setpatientsdata } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { FaBlackTie, FaHeartCirclePlus } from "react-icons/fa6";
<div className={styles.pmiddlesection} >
  <div className={styles.titleststdiv} >
    <p>First name</p>
    <p>Last name</p>
    <p>Age</p>
    <p>Gender</p>
    <p>Phone number</p>
  </div>
</div>

export default function Patients() {
  const [isLoading, setIsloading] = useState(true)

  const dispatch = useDispatch();
  const patientsdatafromredux = useSelector((state) => state.patientdata)


  useEffect(() => {
    axios.get("http://localhost:8000/patient/patientslist/").then((response) => {
      console.log(response.data);
      dispatch(setpatientsdata(response.data));
      setIsloading(false)
    }).catch((error) => {
      console.log(`Error:${error}`);
      setIsloading(true)
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
        <div>



          {
            isLoading ? <ReactLoading
              type={"spinningBubbles"}
              className={styles.Loadingspinner}
              color={FaBlackTie}
              height={20}
              width={20}
            /> : patientsdatafromredux.map((item) => <div className={styles.itemsdiv} >
              <div className={styles.innerrows} >
                <p>  {item.fields.first_name} </p>
                <p> {item.fields.last_name} </p>
                <p> {item.fields.age} </p>
                <p> {item.fields.gender} </p>
                <p> {item.fields.phone_number} </p>
              </div>
            </div>)
          }

        </div>
      </div>


    </div>
  );
}
