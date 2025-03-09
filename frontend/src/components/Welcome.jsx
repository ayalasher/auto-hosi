import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBlackTie, FaHeartCirclePlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import styles from "./styles.module.css";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
export default function Welcome() {
  const location = useLocation();
  const navigate = useNavigate();

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
            <p>Log in for details</p>
            <p className={styles.textstyling}>
              <b>user role:</b>
            </p>
            <p> Log into the system for details </p>
          </div>

          <div className={styles.sgc2}>
            <button
              // onClick={alert("hakuna mchezo raondiii")}
              className={styles.topbuttons}
            >
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
            <Link className={styles.linkbtns} title="Log in" to={"/Login"}>
              Log in
            </Link>
            <Link className={styles.linkbtns} title="Sign up" to={"/Signup"}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
      {/* <hr color="green" size="2" /> */}
      <div className={styles.hrline}></div>
      {/* <div> */}
      <div className={styles.logintousesystem}>
        {/* <Sidebar /> */}
        <p className={styles.logintxt}>Log in to use system. </p>
        <p>
          {/* {" "}
          <ReactLoading
            type={"spinningBubbles"}
            color={FaBlackTie}
            height={20}
            width={20}
          />{" "} */}
        </p>
      </div>

      {/* </div> */}
    </div>
  );
}
