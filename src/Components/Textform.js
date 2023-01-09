import React from 'react'
import { useState } from 'react';

export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleclearClick = () => {
        let newText = "";
        setText(newText)
    }

    const handlecopyClick = () => {
        navigator.clipboard.writeText(text)
    }

    const handleRESClick = () => {
        let newText = text.trim();
        setText(newText)
    }

    const handlereverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText)
    }

    const handlecutClick = () => {
        navigator.clipboard.writeText(text)
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const style = {
        'font-weight' : 'normal'
    }
    const [myStyle,setMyStyle] = useState(style);
    const [btn,setBtn] = useState("Bold Text");

    const handleboldClick = () => {
        if(myStyle['font-weight'] === "normal"){
            setMyStyle({
                'font-weight' : 'bold'
            })
            setBtn("Normal Text")
        }
        else{
            setMyStyle({
                'font-weight' : 'normal'
            })
            setBtn("Bold Text")
        }
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
                    <textarea style={myStyle} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleRESClick}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1" onClick={handlereverseClick}>Reverse the text</button>
                <button className="btn btn-primary mx-1" onClick={handlecopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handlecutClick}>Cut Text</button>
                <button className="btn btn-primary mx-1" onClick={handleboldClick}>{btn}</button>
                <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                {/* text.split(" ") will split words and form array */}
                <p>{countword()} words and {text.length} characters</p>
                {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
                <p>{0.008 * countword()} Minutes read</p>
                <h2>Preview</h2>
                <p style={myStyle}>{text}</p>
            </div>
        </>
    )
}
