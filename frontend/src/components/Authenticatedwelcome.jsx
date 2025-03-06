import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import styles from "./styles.module.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Patients from "./Patients";
import { useSelector } from "react-redux";
export default function Authnticatedwelcome() {
  const [section, setSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const userdatafromredux = useSelector((state) => state.userdata);

  //   function patialrendering() {
  //     if (location.pathname == "/home") {
  //       return <Patients />;
  //     } else {
  //     }
  //   }

  // get the user data from the log in and the sign up page....
  const { userdata } = location.state || {};
  return (
    <div className={styles.welcomescreen}>
      <div className={styles.topsection}>
        <h1 className={styles.heading}>
          Auto hosi system {"   "} <FaHeartCirclePlus size={25} />{" "}
        </h1>
        <div className={styles.somethinggood}>
          <div className={styles.sgc1}>
            <p className={styles.heading2}>Welcome </p>
            <p>
              <b>Username:</b>
            </p>
            <p> {userdatafromredux.userdata.username} </p>
            <p className={styles.textstyling}>
              <b>user role:</b>
            </p>
            <p> {userdatafromredux.userdata.role} </p>
            {/* <p>hello</p> */}
          </div>

          <div className={styles.sgc2}>
            <button className={styles.topbuttons}>
              {" "}
              <FaUser color={"#CBCBCB"} size={25} />{" "}
            </button>
            <button
              // onClick={alert("hakuna mchezo raondiii")}
              className={styles.topbuttons}
            >
              {" "}
              <MdLogout color={"#CBCBCB"} size={25} />{" "}
            </button>
          </div>
        </div>
      </div>
      {/* <hr color="green" size="2" /> */}
      <div className={styles.hrline}></div>
      {/* <div> */}

      <div className={styles.authenticatedwelcomemiddlesection}>
        <Sidebar />
        <Outlet />
      </div>

      {/* </div> */}
    </div>
  );
}
