import React from 'react';
import Input from "./Input";

function FormAdminUser() {
  return (
    <div>
        <form id="formAdmin">
          <div className="containerAdmin" id="formAdminId">
            <label htmlFor="user-dashboard" className="user-dashboard">
              <Input
                type="text"
                id="user-email"
                name="user-email"
                placeholder="Email"
              />

              <Input
                type="text"
                id="user-password"
                name="user-password"
                placeholder="Password"
              />
            </label>
          </div>
        </form>
      </div>
  );
}

export default FormAdminUser