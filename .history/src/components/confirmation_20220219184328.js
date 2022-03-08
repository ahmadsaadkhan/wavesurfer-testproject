import React from "react";
import Notification from "./Notification";

const Confirmation = ({message, type, accept, decline}) => {
    return (
        <Notification type={type} message={message}>
                <button className="btn btn-primary" onClick={accept}>Yes</button>
                <button className="btn btn-danger" onClick={decline}>No</button>
        </Notification>
    )
};

export default Confirmation;
