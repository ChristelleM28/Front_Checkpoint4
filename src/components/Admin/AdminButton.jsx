import React from "react";

function Button({ title, more, onClick }) {
  return (
    <div className="divButton">
      <button className="AdminButton" onClick={onClick}>
        <a>
          <span className="title">{title}</span>
          <span className="more">{more}</span>
        </a>
      </button>
    </div>
  );
}

export default Button;
