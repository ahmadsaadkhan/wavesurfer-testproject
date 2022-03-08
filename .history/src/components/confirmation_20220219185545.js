import React, { useState } from "react";
import Notification from "./Notification";

const Confirmation = ({message, type, accept, decline}) => {
    const [status, setstatus] = useState(true);
    const handleAccept = () => {
        accept()
        setstatus(false)
        return true
    }
    const handleDecline = () => {
        decline()
        return null
    }
    return (
        status && <Notification type={type} message={message}>
                <button className="btn btn-primary" onClick={handleAccept}>Yes</button>
                <button className="btn btn-danger" onClick={handleDecline}>No</button>
        </Notification>
    )
};

export default Confirmation;
