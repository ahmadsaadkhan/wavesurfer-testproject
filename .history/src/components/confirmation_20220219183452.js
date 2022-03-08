import React from "react";
import Notification from "./Notification";

const Confirmation = () => {
    return (
        <Notification type="info" message="Should we bake a pie?">
                <button class="btn btn-primary">Yes</button>
                <button class="btn btn-danger">No</button>
        </Notification>
    )
};

export default Confirmation;
