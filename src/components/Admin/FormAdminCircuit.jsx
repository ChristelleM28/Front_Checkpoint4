import React from "react";
import Input from "./Input";

function FormAdminCircuit({
  modifyCircuits,
  circuits,
  setModifyCircuits,
  setSelectedValue,
  selectedValue,
  handleChange
}) {

  // gère la modification du circuit
  const handleModify = (e) => {
    setModifyCircuits(true);
    setSelectedValue(
      circuits.filter((circuit) => {
        return circuit.id === parseInt(e.target.value, 10);
      })[0]
    );
  };

  return (
    <div>
      <form id="formAdmin">
        <div className="containerAdmin" id="formAdminId">
          <div>
            <label htmlFor="selectFile" className="selectFile">
              <select
                name="circuit"
                id="circuit"
                value=""
                onChange={handleModify}
              >
                <option selected={!modifyCircuits ? "selected" : ""}>
                  Select a circuit
                </option>
                {circuits &&
                  circuits.map((circuit) => {
                    return (
                      <option value={circuit.id} key={circuit.id}>
                        {circuit.name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>

          <label htmlFor="circuit-dashboard" className="circuit-dashboard">
            <Input
              type="text"
              id="circuit-name"
              name="name"
              placeholder="Nom du circuit"
              value={selectedValue.name}
              onChange={(e) => handleChange(e)}
            />

            <Input
              type="text"
              id="circuit-time"
              name="time"
              placeholder="Horaires"
              value={selectedValue.time}
              onChange={handleChange}
            />

            <Input
              type="text"
              id="circuit-address"
              name="address"
              placeholder="Adresse"
              value={selectedValue.address}
              onChange={handleChange}
            />

            <Input
              type="text"
              id="circuit-link"
              name="circuit_link"
              placeholder="Lien du circuit"
              value={selectedValue.circuit_link}
              onChange={handleChange}
            />

            <Input
              type="text"
              id="circuit-assets"
              name="assets_circuit"
              placeholder="Médias"
              value={selectedValue.assets_circuit}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default FormAdminCircuit;
