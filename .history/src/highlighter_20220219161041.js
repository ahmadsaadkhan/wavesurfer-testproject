import { useState } from "react";

const GetHighlightedText = (text, highlight) => {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part)}</span>;
}



const Highlighter = () => {
    const [formData, setFormData] = useState([]);
    const handleText = (text) => {
        setFormData({ ...formData, highlight: text })
        const textyyy = GetHighlightedText(formData.text, formData.highlight);
        console.log(textyyy);
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

            <GetHighlightedText text={formData.text} highlight={formData.highlight} />
        </>
    );
}

export default Highlighter;