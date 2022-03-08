import { useState } from "react";

const HighlightedText = ({text = '', highlight = ''}) => {
    if (!highlight.trim()) {
      return <span>{text}</span>
    }
    const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, 'gi')
    const parts = text.split(regex)
    return (
      <span>
         {parts.filter(part => part).map((part, i) => (
             regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
         ))}
     </span>
    )
 }

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
            <p>{formData.text}</p>

            <HighlightedText text={formData.text} highlight={formData.highlight} />
        </>
    );
}

export default Highlighter;