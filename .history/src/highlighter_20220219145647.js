import { useState } from "react";

const Highlighter = () => {
    const [formData, setformData] = useState([]);
    return (
        <>
            <h1>highlighter</h1>
            <textarea
                name="textbox"
                cols="30"
                rows="10"
                onChange={(e) => { setformData({ ...formData, text: e.target.value }) }}
            />
            <br />
            <input type="text" />
            <br />
            <input type="checkbox" name="caseSensitive" /> Case Sensitive
            <p>{FormData.text}</p>
        </>
    );
}

export default Highlighter;