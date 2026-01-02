import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared!", "success");
    }
    const handleAlterClick = () => {
        let newText = text.split("").map((char, index) =>
            index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join("");
        setText(newText);
        props.showAlert("Converted to alternative case", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter txt here 2'); // text is a variable whose value is updated by the setText function
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#0C113A' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#0C113A' : 'white', color: props.mode === 'dark' ? 'white' : '#0C113A' }} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
                <button className='btn btn-primary mx-2' onClick={handleAlterClick}>Convert to Alternate case</button>
            </div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#0C113A' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something to preview it here'}</p>
            </div>
        </>
    );
}
