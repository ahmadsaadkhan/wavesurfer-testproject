import { useEffect, useState } from "react";



const Highlighter = () => {
    const [formData, setFormData] = useState([]);
    const [finalValue, setFinalValue] = useState("muqadar");

    const handleText = (text) => {
        setFormData({ ...formData, highlight: text })
        const textyyy = changeInput(text);
        console.log(textyyy);
    }


    const changeInput = (value) => {;
        let txt = document.getElementById("myText").innerText;
        let idx = txt.indexOf(value);
        if (idx >= 0) {
            let newText = [txt.substring(0, idx), <strong>{txt.substring(idx, idx + value.length)}</strong>, txt.substring(idx + value.length)];
            setFinalValue({ inputValue: value, text: newText });
        } else {
            setFinalValue({ inputValue: value, text: this.initialText });
        }
    }

    return (
        <>
            <h1>highlighter</h1>
            <textarea
                name="textbox"
                cols="30"
                rows="10"
                onChange={(e) => { setFormData({ ...formData, text: e.target.value }) }}
            />
            <br />
            <input
                type="text"
                onChange={(e) => handleText(e.target.value)}
            />
            <br />
            <input type="checkbox" name="caseSensitive" /> Case Sensitive
            <p>{formData.text}</p>
            <br />
            <br />
            <br />
            <br />
            <p id="myText">{formData.text}</p>
            <p>{finalValue}</p>

            {/* <GetHighlightedText text={formData.text} highlight={formData.highlight} /> */}
        </>
    );
}

export default Highlighter;