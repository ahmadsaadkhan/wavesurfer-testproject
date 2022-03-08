import { useState } from "react";
import React from "react";

const Highlighter = () => {
    const [formData, setFormData] = useState({ text: "Always remember three 'R's: Repetition, repetition, repetition" });
    const [caseStatus, setcaseStatus] = useState("i");

    const handleCheckbox = (value) => {
        value === "i" ? setcaseStatus("g") : setcaseStatus("i")
    }

    const Text = ({text}) => {
        return text
    }

    const Highlighter = ({ text = "", highlight = "" }) => {
        if (!highlight.trim()) {
            return <span>{text}</span>;
        }
        const regex = new RegExp(`(${highlight})`, caseStatus);
        const parts = text.split(regex);

        return (
            <>
                {parts.filter(String).map((part, i) => {
                    return regex.test(part) ? (
                        <mark key={i}>{part}</mark>
                    ) : (
                        <Text key={i} text={part} />
                    );
                })}
            </>
        );
    };
    return (
        <div className="container">
            <h1>Highlighter</h1>
            <textarea
                data-testid="source-text"
                cols="30"
                rows="10"
                value={formData.text}
                onChange={(e) => { setFormData({ ...formData, text: e.target.value }) }}
            />
            <br />
            <input
              data-testid="search-term"
                type="text"
                onChange={(e) => { setFormData({ ...formData, highlight: e.target.value }) }}

            />
            <br />
            <br />
            <span>Case Sensitive ?</span>
            <input
                data-testid="case-sensitive"
                type="checkbox"
                value={caseStatus}
                onChange={(e) => handleCheckbox(e.target.value)} /> 
            <br />
            <br />
        <div data-testid="result">
            <Highlighter
                text={formData.text}
                highlight={formData.highlight}
            />
        </div>
        </div>
    );
}

export default Highlighter;