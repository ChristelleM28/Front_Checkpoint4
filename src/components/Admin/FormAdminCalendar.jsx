import React from "react";
import Input from "./Input";

function FormAdminCalendar() {
  return (
    <div>
      <form id="formAdmin">
        <div className="containerAdmin" id="formAdminId">
          <label htmlFor="calendar-dashboard" className="calendar-dashboard">
            <Input
              type="text"
              id="calendar-date"
              name="calendar-date"
              placeholder="Date"
            />

            <Input
              type="text"
              id="calendar-category"
              name="calendar-category"
              placeholder="Catégorie"
            />

            <Input
              type="text"
              id="calendar-circuitId"
              name="calendar-circuitId"
              placeholder="Circuit"
            />
          </label>
        </div>
      </form>
    </div>
  );
}


export default FormAdminCalendar;
