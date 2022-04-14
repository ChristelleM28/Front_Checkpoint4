import React from 'react';
import Input from "./Input";

function FormAdminInfo() {
  return (
    <div>
      <form id="formAdmin">
        <div className="containerAdmin" id="formAdminId">
          <label htmlFor="info-dashboard" className="info-dashboard">
            <Input
              type="text"
              id="info-title"
              name="info-title"
              placeholder="Titre de l'info"
            />

            <Input
              type="text"
              id="info-description"
              name="info-description"
              placeholder="Description des infos"
            />

            <Input
              type="text"
              id="info-date"
              name="info-date"
              placeholder="Date info"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default FormAdminInfo