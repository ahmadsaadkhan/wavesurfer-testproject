import { useState } from "react";

const Highlighter = () => {
    const [formData, setFormData] = useState({ text: "Always remember three 'R's: Repetition, repetition, repetition" });
    const [finalValue, setFinalValue] = useState("muqadar");
    const [caseStatus, setcaseStatus] = useState("i");

    const handleCheckbox = (value) => {
        value === "i" ? setcaseStatus("g") : setcaseStatus("i")
    }

    const Highlighted = ({ text = "", highlight = "" }) => {
        if (!highlight.trim()) {
            return <span>{text}</span>;
        }
        const regex = new RegExp(`(${highlight})`, caseStatus);
        const parts = text.split(regex);

        return (
            <span>
                {parts.filter(String).map((part, i) => {
                    return regex.test(part) ? (
                        <mark key={i}>{part}</mark>
                    ) : (
                        <span key={i}>{part}</span>
                    );
                })}
            </span>
        );
    };
    console.log(caseStatus)
    return (
        <>
            <h1>Highlighter</h1>
            <textarea
                name="textbox"
                cols="30"
                rows="10"
                value={formData.text}
                onChange={(e) => { setFormData({ ...formData, text: e.target.value }) }}
            />
            <br />
            <input
                type="text"
                // onChange={(e) => handleText(e.target.value)}
                onChange={(e) => { setFormData({ ...formData, highlight: e.target.value }) }}

            />
            <br />
            <input 
            type="checkbox" 
            name="caseSensitive" 
            value={caseStatus}
            onChange={(e) => handleCheckbox(e.target.value)} /> Case Sensitive
            <br />
            <Highlighted
                text={formData.text}
                highlight={formData.highlight}
            />
        </>
    );
}

export default Highlighter;