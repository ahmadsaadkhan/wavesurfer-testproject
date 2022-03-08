import React from "react";
import Notification from "./Notification";

const Confirmation = ({message, type, accept, decline}) => {
    const handleAccept = () => {
        accept();
        this.setState({
            show: false
        });
    }
    return (
        <Notification type={type} message={message}>
                <button className="btn btn-primary" onClick={handleAccept}>Yes</button>
                <button className="btn btn-danger" onClick={decline}>No</button>
        </Notification>
    )
};

export default Confirmation;
