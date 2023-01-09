import React from 'react'
import { useState } from 'react';

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleclearClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    function countword() {
        if (text === "") {
            let w = text.split(" ");
            return w.length - 1;
        }
        else {
            let w = text.split(" ").length;
            return w;
        }
    }

    const [text, setText] = useState('Enter text here');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                {/* text.split(" ") will split words and form array */}
                <p>{countword} words and {text.length} characters</p>
                {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
                <p>{0.008 * countword()} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
