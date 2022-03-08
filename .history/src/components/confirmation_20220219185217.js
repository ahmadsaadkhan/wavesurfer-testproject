import React from "react";
import Notification from "./Notification";

const Confirmation = ({message, type, accept, decline}) => {
    const handleAccept = () => {
        accept()
        return true
    }
    const handleDecline = () => {
        decline()
        return null
    }
    return (
        <Notification type={type} message={message}>
                <button className="btn btn-primary" onClick={handleAccept}>Yes</button>
                <button className="btn btn-danger" onClick={handleDecline}>No</button>
        </Notification>
    )
};

export default Confirmation;
