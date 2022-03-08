import React, { useState } from "react";
import Notification from "./Notification";

const Confirmation = ({message, type, accept, decline}) => {
    const [showNotification, setShowNotification] = useState(true);
    const handleAccept = () => {
        accept()
        setShowNotification(false)
        return true
    }
    const handleDecline = () => {
        decline()
        setShowNotification(false)
        return null
    }
    return (
        showNotification && <Notification type={type} message={message}>
                <button className="btn btn-primary" onClick={handleAccept}>Yes</button>
                <button className="btn btn-danger" onClick={handleDecline}>No</button>
        </Notification>
    )
};

export default Confirmation;
