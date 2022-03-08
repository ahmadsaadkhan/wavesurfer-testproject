import { useState } from "react";

const Highlighter = () => {
    const [formData, setFormData] = useState({ text: "Always remember three 'R's: Repetition, repetition, repetition" });
    const [caseStatus, setcaseStatus] = useState("i");

    const handleCheckbox = (value) => {
        value === "i" ? setcaseStatus("g") : setcaseStatus("i")
    }

    const Highlighter = ({ text = "", highlight = "" }) => {
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
    return (
        <div>
            <h1>Highlighter</h1>
            <textarea
                cols="30"
                rows="10"
                value={formData.text}
                onChange={(e) => { setFormData({ ...formData, text: e.target.value }) }}
            />
            <br />
            <input
                type="text"
                onChange={(e) => { setFormData({ ...formData, highlight: e.target.value }) }}

            />
            <br />
            <br />
            <span>Case Sensitive ?</span>
            <input
                type="checkbox"
                value={caseStatus}
                onChange={(e) => handleCheckbox(e.target.value)} /> 
            <br />
            <br />
            <Highlighter
                text={formData.text}
                highlight={formData.highlight}
            />
        </div>
    );
}

export default Highlighter;