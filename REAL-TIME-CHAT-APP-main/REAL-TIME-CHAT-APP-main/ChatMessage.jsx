/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function ChatMessage({ text, name, logo, user, email }) {
  return (
    <div>
      {user.email === email ? (
        <div className="d-flex justify-content-end right-content">
          <div className="message-name"> {name}</div>
          <span className="message-right">
            <span className="message-text">{text}</span>
            <img src={logo} alt="logo" className="logo-icon" />
          </span>
        </div>
      ) : (
        <div className="d-flex justify-content-end left-content">
          <div className="message-name">{name}</div>
          <span className="message-left">
            <img src={logo} alt="logo" className="logo-icon" />
            <span className="message-text">{text}</span>
          </span>
        </div>
      )}
    </div>
  );
}
