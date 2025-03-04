import styles from "./styles.module.css";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserMd } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  return (
    <div className={styles.loginscreen}>
      <h1>
        Auto Hosi System <FaHeartCirclePlus size={25} />{" "}
      </h1>
      <h3>Log in</h3>
      <form className={styles.loginform} action="submit">
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
            />
          </div>

          <br />
          <label className={styles.labels} htmlFor="">
            User role
          </label>
          <br />
          <div className={styles.iconinputcontainer}>
            <FaUserMd size={20} color="#7f8c98" />
            <input
              className={styles.inputs}
              type="text"
              //   value=""
              placeholder="Enter your role"
              required
            />
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
            />
          </div>
          <br />
        </fieldset>
        <button className={styles.loginsignupbutton} type="submit">
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
