import styles from "./styles.module.css";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserMd } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setuser } from "../redux/store";
import { useDispatch } from "react-redux";

export default function Signuo() {
  // Efficient usState for all the data items...

  const dispatch = useDispatch();
  const [userdata, setUserdata] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    userrole: "",
    // confirmpassword: "",
  });

  const [confirmpassword, setConfirmpassword] = useState("");
  const navigation = useNavigate();

  function onsubmit(e) {
    e.preventDefault(); //Prevents page reload...
  }

  async function signupuser() {
    if (userdata.userpassword !== confirmpassword) {
      alert("Passwords do not match");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8000/user/signup/",
          userdata,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Response", response.data);
        dispatch(setuser(response.data));
        navigation("/Home/patients", {
          state: {
            userdata: response.data.userdata,
          },
        });
      } catch (error) {
        console.log("Error:", error);
      }
    }
    // e.preventDefault(); // Prevents page reload
  }

  return (
    <div className={styles.loginscreen}>
      <h1>
        Auto Hosi System <FaHeartCirclePlus size={25} />{" "}
      </h1>
      <h3>Sign up</h3>
      <form onSubmit={onsubmit} className={styles.loginform}>
        <fieldset className={styles.fieldset}>
          <label className={styles.labels} htmlFor="">
            User name
          </label>
          <br />
          <div className={styles.iconinputcontainer}>
            <CiUser size={20} color="#7f8c98" />
            <input
              className={styles.inputs}
              onChange={(e) =>
                setUserdata({ ...userdata, username: e.target.value })
              }
              type="text"
              //   value=""
              placeholder="Enter your  name"
              color="green"
              required
            />
          </div>

          <br />

          <label className={styles.labels} htmlFor="">
            User Email
          </label>
          <br />
          <div className={styles.iconinputcontainer}>
            <MdEmail size={20} color="#7f8c98" />
            <input
              className={styles.inputs}
              type="email"
              onChange={(e) =>
                setUserdata({ ...userdata, useremail: e.target.value })
              }
              //   value=""
              placeholder="Enter your Email"
              color="green"
              required
            />
          </div>

          <br />

          <label className={styles.labels} htmlFor="">
            User role
          </label>
          <br />
          <div className={styles.iconinputcontainer}>
            <FaUserMd size={20} color="#7f8c98" />

            <select
              onChange={(e) =>
                setUserdata({ ...userdata, userrole: e.target.value })
              }
              className={styles.inputs}
              name="userrole"
              id="userrole"
            >
              <option value="Admin">Admin</option>
              <option value="doctor">Doctor</option>
              <option value="nurse">Nurse</option>
              <option value="Lab technician">Lab Technician</option>
            </select>
          </div>

          <br />
          <label className={styles.labels} htmlFor="">
            Password
          </label>
          <br />
          <div className={styles.iconinputcontainer}>
            <RiLockPasswordFill size={20} color="#7f8c98" />
            <input
              className={styles.inputs}
              type="password"
              //   value=""
              placeholder="Enter your password"
              onChange={(e) =>
                setUserdata({ ...userdata, userpassword: e.target.value })
              }
              required
            />
          </div>
          <br />

          <label className={styles.labels} htmlFor="">
            Confirm Password
          </label>
          <br />
          <div className={styles.iconinputcontainer}>
            <RiLockPasswordFill size={20} color="#7f8c98" />
            <input
              className={styles.inputs}
              type="password"
              //   value=""
              placeholder="Confirm your password"
              required
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>
          <br />
        </fieldset>
        <button
          onClick={signupuser}
          className={styles.loginsignupbutton}
          type="submit"
        >
          Sign up
        </button>
        <div className={styles.bottomsection}>
          <b>Have an account ?</b>
          {"   "}
          <Link className={styles.loginsignupbutton2} to={"/Login"}>
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
}
