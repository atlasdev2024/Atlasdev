import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

const MessengerIcon = () => {
  const messengerLink = "https://m.me/153232761215203";

  const openMessenger = () => {
    window.open(messengerLink, "_blank");
  };

  return (
    <div className="messenger-icon" style={{ position: "fixed", right: "20px", bottom: "20px", zIndex: "1000" }} onClick={openMessenger}>
      <FontAwesomeIcon icon={faFacebookMessenger} style={{ width: "60px", height: "60px" }} />
    </div>
  );
};

export default MessengerIcon;