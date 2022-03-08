import { useState } from "react";
import React from "react";

const Highlighter = () => {
    const [formData, setFormData] = useState({ text: "Always remember three 'R's: Repetition, repetition, repetition" });
    const [caseStatus, setCaseStatus] = useState("i");

    const handleCheckbox = (value) => {
        value === "i" ? setCaseStatus("g") : setCaseStatus("i")
    }

    const Mark = ({text}) => {
        return <mark>{text}</mark>
    }
    const Text = ({text}) => {
        return text
    }

    const Highlighter = ({ text = "", highlight = "" }) => {
        if (!highlight.trim()) {
            return <Text text={text} />
        }
        const regex = new RegExp(`(${highlight})`, caseStatus);
        const parts = text.split(regex);

        return (
            <>
                {parts.filter(String).map((part, i) => {
                    return regex.test(part) ? (
                        <Mark key={i} text={part} />
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