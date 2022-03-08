import React from "react";
import Notification from "./Notification";

const Confirmation = () => {
    return (
        <div class="alert alert-info">
            <p>Should we bake a pie?</p>
            <button class="btn btn-primary">Yes</button>
            <button class="btn btn-danger">No</button>
        </div>
    )
};

export default Confirmation;
