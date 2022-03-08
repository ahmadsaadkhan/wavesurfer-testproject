import { useEffect, useState } from "react";



const Highlighter = () => {
    const [formData, setFormData] = useState({ text: 'this is a test text' });
    const [finalValue, setFinalValue] = useState("muqadar");

    const handleText = (text) => {
        setFormData({ ...formData, highlight: text })
       //  changeInput(text);
        //  console.log(textyyy);
    }


    // const changeInput = (value) => {
    //     console.log(value);
    //     let txt = document.getElementById("myText").innerText;
    //     let idx = txt.indexOf(value);
    //     // return console.log(txt)  
    //     if (idx >= 0) {
    //         let newText = [txt.substring(0, idx), <strong>{txt.substring(idx, idx + value.length)}</strong>, txt.substring(idx + value.length)];
    //         setFinalValue({ inputValue: value, text: newText });
    //     } else {
    //         setFinalValue({ inputValue: value, text: formData.text });
    //     }
    // }



    const Highlighted = ({ text = "", highlight = "" }) => {
        if (!highlight.trim()) {
            return <span>{text}</span>;
        }
        const regex = new RegExp(`(${highlight})`, "i");
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
            <input type="checkbox" name="caseSensitive" /> Case Sensitive
            <p>{formData.text}</p>
            <br />
            
            <p id="myText">{formData.text}</p>
            <p>{finalValue}</p>

            <Highlighted
                text="The quick brown fox jumps over the lazy dog"
                highlight={formData.highlight}
            />

            {/* <GetHighlightedText text={formData.text} highlight={formData.highlight} /> */}
        </>
    );
}

export default Highlighter;