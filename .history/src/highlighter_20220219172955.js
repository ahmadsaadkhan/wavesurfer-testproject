import { useEffect, useState } from "react";



const Highlighter = () => {
    const [formData, setFormData] = useState({ text: "Always remember three 'R's: Repetition, repetition, repetition" });
    const [finalValue, setFinalValue] = useState("muqadar");
    const [caseStatus, setcaseStatus] = useState("i");
    const handleText = (text) => {
        setFormData({ ...formData, highlight: text })
    }

    const handleCheckbox = (value) => {
        console.log(value)
        value ? setcaseStatus("i") : setcaseStatus("g")
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

    return (
        <>
            <h1>highlighter</h1>
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
                onChange={(e) => handleText(e.target.value)}
            />
            <br />
            <input type="checkbox" name="caseSensitive" onChange={(e) => handleCheckbox(e.target.checked)} /> Case Sensitive
            <p>{formData.text}</p>
            <br />
            
            <p id="myText">{formData.text}</p>
            <p>{finalValue}</p>

            <Highlighted
                text={formData.text}
                highlight={formData.highlight}
            />

            {/* <GetHighlightedText text={formData.text} highlight={formData.highlight} /> */}
        </>
    );
}

export default Highlighter;