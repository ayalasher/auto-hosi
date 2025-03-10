import styles from "./styles.module.css";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserMd } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setuser } from "../redux/store";

export default function Login() {
  const dispatch = useDispatch();
  const [userdata, setuserdata] = useState({
    username: "",
    userpassword: "",
    userrole: "",
  });

  function onsumbit(e) {
    e.preventDefault();
  }

  const navigate_to = useNavigate();

  async function Loginuser() {
    try {
      const response = await axios.post(
        "http://localhost:8000/user/login/",
        userdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response", response.data);
      // Setting the data from the login process
      dispatch(setuser(response.data));
      if (response.data.userdata != null) {
        navigate_to("/Home/patients", {
          state: {
            userdata: response.data.userdata,
          },
        });
      } else {
        alert(`${response.data.message}.Try again !  `);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <div className={styles.loginscreen}>
      <h1>
        Auto Hosi System <FaHeartCirclePlus size={25} />{" "}
      </h1>
      <h3>Log in</h3>
      <form className={styles.loginform} onSubmit={onsumbit}>
        <fieldset className={styles.fieldset}>
          <label className={styles.labels} htmlFor="">
            User name
          </label>
          <br />
          <div className={styles.iconinputcontainer}>
            <CiUser size={20} color="#7f8c98" />
            <input
              className={styles.inputs}
              type="text"
              //   value=""
              placeholder="Enter your  name"
              color="green"
              required
              onChange={(e) =>
                setuserdata({ ...userdata, username: e.target.value })
              }
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
                setuserdata({ ...userdata, userrole: e.target.value })
              }
              className={styles.inputs}
              name="userrole"
              id="userrole"
              required
              defaultValue=""
            >
              <option disabled value="">
                Select Role
              </option>
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
              required
              onChange={(e) =>
                setuserdata({ ...userdata, userpassword: e.target.value })
              }
            />
          </div>
          <br />
        </fieldset>
        <button
          onClick={Loginuser}
          className={styles.loginsignupbutton}
          type="submit"
        >
          Log in
        </button>
        <div className={styles.bottomsection}>
          <b>Have no account ?</b>
          {"   "}
          <Link className={styles.loginsignupbutton2} to={"/Signup"}>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
