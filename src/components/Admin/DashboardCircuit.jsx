import React, { useState, useEffect } from "react";
import axios from "axios";
import FormAdminCircuit from "./FormAdminCircuit";
import FormAdminCalendar from "./FormAdminCalendar";
import FormAdminInfo from "./FormAdminInfo";
import FormAdminUser from "./FormAdminUser";
import AdminButton from "./AdminButton";
import "./Dashboard.css";

function DashboardCircuit() {
  const [circuits, setCircuits] = useState("");
  const [submited, setSubmited] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    name: "",
    time: "",
    address: "",
    circuit_link: "",
    assets_circuit: "",
  });
  const [modifyCircuits, setModifyCircuits] = useState(false);

  // Je récupère tous les circuits
  useEffect(() => {
    (async () => {
      await axios
        .get(`${process.env.REACT_APP_CHECKPOINT4_URL}/api/circuits/`)
        .then((response) => response.data)
        .then((data) => {
          setCircuits(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, [modifyCircuits, submited]);

  // je gère ma sélection
  const handleChange = (e) => {
    console.log(e.target.name)
    setSelectedValue((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };

  //  Ajout de circuit
  const handleAddCircuits = async (e) => {
    e.preventDefault();
    if (
      !selectedValue.name ||
      !selectedValue.time ||
      !selectedValue.address ||
      !selectedValue.circuit_link ||
      !selectedValue.assets_circuit
    ) {
      alert("Remplir tous les champs");
    } else {
      try {
        await axios
          // renvois le state des infos de création
          .post(
            `${process.env.REACT_APP_CHECKPOINT4_URL}/api/circuits`,
            selectedValue
          )
          .then(function (response) {
            if (response.status === 200) {
              alert("New circuit created!");

              // je mets à jour la liste des circuits
              setCircuits(
                circuits.filter((circuit) => circuit.id !== selectedValue.id)
              );
              setSelectedValue({
                name: "",
                time: "",
                address: "",
                circuit_link: "",
                assets_circuit: "",
              });
              setSubmited(true);
            } else {
              alert("Error");
            }
          });
      } catch (err) {
        console.log(err.response);
        alert(err.response.data);
      }
    }
  };

  // Suppression de circuit
  const handleDeleteCircuits = async (e) => {
    e.preventDefault();
    await axios
      .delete(
        `${process.env.REACT_APP_CHECKPOINT4_URL}/api/circuits/${selectedValue.id}`
      )
      .then((response) => {
        if (response.status === 204) {
          alert("The circuit is deleted!");
          // je mets à jour la liste des projets
          setCircuits(
            circuits.filter((circuit) => circuit.id !== selectedValue.id)
          );
          setSelectedValue({
            name: "",
            time: "",
            address: "",
            circuit_link: "",
            assets_circuit: "",
          });
        } else {
          alert("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // Modification du circuit
  const handleModifyCircuits = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `${process.env.REACT_APP_CHECKPOINT4_URL}/api/circuits/${selectedValue.id}`,
        {
          ...selectedValue,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Circuit modified succesfully");
          setSelectedValue({
            name: "",
            time: "",
            address: "",
            circuit_link: "",
            assets_circuit: "",
          });
          setModifyCircuits(false);
        } else {
          alert("Error");
        }
      });
  };

  return (
    <div className="container-pages">
      <div className="container-form">
        <h1 className="admin"> Dashboard </h1>
        <h2>Administration du circuit</h2>
        <FormAdminCircuit
          circuits={circuits}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          handleChange={handleChange}
          setModifyCircuits={setModifyCircuits}
        />

        <div className="container-button">
          <AdminButton
            type="submit"
            title="Ajouter"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setCircuits={setCircuits}
            circuits={circuits}
            setSubmited={setSubmited}
            onClick={handleAddCircuits}
          />
          <AdminButton
            type="submit"
            title="Modifier"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setModifyCircuits={setModifyCircuits}
            onClick={handleModifyCircuits}
          />
          <AdminButton
            type="submit"
            title="Supprimer"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setCircuits={setCircuits}
            circuits={circuits}
            onClick={handleDeleteCircuits}
          />
        </div>

        <h2>Administration du calendrier</h2>
        <FormAdminCalendar />
        <div className="container-button">
          <AdminButton
            type="submit"
            title="Ajouter"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            // setCalendrier={setCalendrier}
            // calendrier={calendrier}
            setSubmited={setSubmited}
            // onClick={handleAddCalendrier}
          />
          <AdminButton
            type="submit"
            title="Modifier"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            // setModifyCalendrier={setModifyCalendrier}
            // onClick={handleModifyCalendrier}
          />
          <AdminButton
            type="submit"
            title="Supprimer"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            // setCalendrier={setCalendrier}
            // calendrier={calendrier}
            // onClick={handleDeleteCalendrier}
          />
        </div>

        <h2>Administration des informations</h2>
        <FormAdminInfo />
        <div className="container-button">
          <AdminButton
            type="submit"
            title="Ajouter"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            // setInfos={setInfos}
            // infos={infos}
            // setSubmited={setSubmited}
            // onClick={handleAddInfos}
          />
          <AdminButton
            type="submit"
            title="Modifier"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            // setModifyInfos={setModifyInfos}
            // onClick={handleModifyInfos}
          />
          <AdminButton
            type="submit"
            title="Supprimer"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            // setInfos={setInfos}
            // infos={infos}
            // onClick={handleDeleteInfos}
          />
        </div>

        <h2>Administration des utilisateurs</h2>
        <FormAdminUser />
        <div className="container-button">
          <AdminButton
            type="submit"
            title="Ajouter"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            // setUsers={setUsers}
            // users={users}
            setSubmited={setSubmited}
            // onClick={handleAddUsers}
          />
          <AdminButton
            type="submit"
            title="Modifier"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            // setModifyUsers={setModifyUsers}
            // onClick={handleModifyUsers}
          />
          <AdminButton
            type="submit"
            title="Supprimer"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            // setUsers={setUsers}
            // users={users}
            // onClick={handleDeleteUsers}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardCircuit;
