import React, { useState, useEffect } from "react";
// import axios from "axios";
import FormAdminCircuit from "./FormAdminCircuit";
import FormAdminCalendar from "./FormAdminCalendar";
import FormAdminInfo from "./FormAdminInfo";
import FormAdminUser from "./FormAdminUser";

function Dashboard() {

  const [circuits, setCircuits] = useState("");



  return (
    <div className="container-pages">
      <div className="container-form">
        <h1 className="admin"> DASHBOARD </h1>
        <h2>Administartion du circuit</h2>
        <FormAdminCircuit />

        <h2>Administration du calendrier</h2>
        <FormAdminCalendar />

        <h2>Administration des informations</h2>
        <FormAdminInfo />

        <h2>Administration des utilisateurs</h2>
        <FormAdminUser />
      </div>
    </div>
  );
}

export default Dashboard;
