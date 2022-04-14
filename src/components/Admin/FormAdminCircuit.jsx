import React from 'react';
import Input from "./Input";

function FormAdminCircuit() {


  
  return (
    <div>
      <form id="formAdmin">
        <div className="containerAdmin" id="formAdminId">
          {/* <div>
            <label htmlFor="selectFile" className="selectFile">
              <select
                name="project"
                id="project"
                value=""
                onChange={handleModify}
              >
                <option selected={!modifyProject ? "selected" : ""}>
                  Select a projects
                </option>
                {projects &&
                  projects.map((project) => {
                    return (
                      <option value={project.id} key={project.id}>
                        {project.project_name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div> */}

            <label htmlFor="circuit-dashboard" className="circuit-dashboard">
              <Input
                type="text"
                id="circuit-name"
                name="circuit-name"
                placeholder="Nom du circuit"
              />

              <Input
                type="text"
                id="circuit-time"
                name="circuit-time"
                placeholder="Horaires"
              />

              <Input
                type="text"
                id="circuit-address"
                name="circuit-address"
                placeholder="Adresse"
              />

              <Input
                type="text"
                id="circuit-link"
                name="circuit-link"
                placeholder="Lien du circuit"
              />
              
              <Input
                type="text"
                id="circuit-assets"
                name="circuit-assets"
                placeholder="Médias"
              />
            </label>
          </div>
          </form>
    </div>
  );
}

export default FormAdminCircuit;