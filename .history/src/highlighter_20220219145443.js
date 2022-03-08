const Highlighter = () => {
    return (
        <>
            <h1>highlighter</h1>
            <textarea name="textbox" cols="30" rows="10"></textarea>
            <br />
            <input type="text" />
            <br />
            <input type="checkbox" name="caseSensitive" /> Case Sensitive
            <p>{FormData.text}</p>
        </>
    );
}

export default Highlighter;