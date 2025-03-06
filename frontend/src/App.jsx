import { useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/login";
import Signuo from "./components/Signuo";
import ErrorScreen from "./components/Error.jsx";
// import styles from "./components/styles.module.css";
import Authnticatedwelcome from "./components/Authenticatedwelcome.jsx";
import Patients from "./components/Patients.jsx";
import Registerpatients from "./components/Registerpatients.jsx";
import Myappointments from "./components/Myappointments.jsx";
import Techsupport from "./components/Techsupport.jsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route exact path="" element={<Welcome />} />
        <Route path="/Home" element={<Authnticatedwelcome />}>
          <Route index path={"/Home/patients"} element={<Patients />} />
          <Route path="register-patients" element={<Registerpatients />} />
          <Route path="appointments" element={<Myappointments />} />
          <Route path="tech-support" element={<Techsupport />} />
        </Route>
        <Route path="/Login" element={<Login />} />

        <Route path="/Signup" element={<Signuo />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </div>
  );
}

export default App;
