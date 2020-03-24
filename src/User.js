import React, { useState } from "react";

export const User = ({ contact }) => {
  const [myStyle, setMyStyle] = useState({
    visibility: "hidden",
    status: true
  });

  const handleEnter = () => {
    if (myStyle.status === true)
      setMyStyle({ ...myStyle, visibility: "visible" });
  };
  const handleLeave = () => {
    if (myStyle.status === true)
      setMyStyle({ ...myStyle, visibility: "hidden" });
  };

  const handleShow = () => {
    setMyStyle({ status: !myStyle.status, visibility: "visible" });
  };

  return (
    <div>
      <span
        style={{ cursor: "pointer" }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={handleShow}
      >
        {`Imię: ${contact.name.first}`}
      </span>
      <span style={myStyle}>
        {` Nazwisko: ${contact.name.last} E-mail: ${contact.email}`}
      </span>
    </div>
  );
};
