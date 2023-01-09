import React from 'react'
import { useState } from 'react';

export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    
    const handleclearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Textbox cleared","success")
    }
    
    const handlecopyClick = () => {
        props.showAlert("Text has been copy","success")
        navigator.clipboard.writeText(text)
    }
    
    const handleRESClick = () => {
        let newText = text.replace(/[ ]+/g, ' ');;
        setText(newText)
        props.showAlert("Extra space has been removed","success")
    }
    
    const handlereverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Text Reversed","success")
    }
    
    const handlecutClick = () => {
        props.showAlert("Text has been cut","success")
        navigator.clipboard.writeText(text)
        let newText = "";
        setText(newText)
    }
    
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    
    const style = {
        fontWeight: 'normal'
    }
    const [myStyle, setMyStyle] = useState(style);
    const [btn, setBtn] = useState("Bold Text");
    
    const handleboldClick = () => {
        if (myStyle.fontWeight === "normal") {
            setMyStyle({
                fontWeight: 'bold'
            })
            setBtn("Normal Text")
        }
        else {
            setMyStyle({
                fontWeight: 'normal'
            })
            setBtn("Bold Text")
        }
        props.showAlert("Text converted","success")
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

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea style={{ fontWeight: btn === 'Normal Text' ? 'bold' : 'normal', backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-1`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-1`} onClick={handleRESClick}>Remove Extra Space</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-1`} onClick={handlereverseClick}>Reverse the text</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-1`} onClick={handlecopyClick}>Copy Text</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-1`} onClick={handlecutClick}>Cut Text</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-1`} onClick={handleboldClick}>{btn}</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mx-1`} onClick={handleclearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>-: Your Text Summary :-</h2>
                {/* text.split(" ") will split words and form array */}
                <p>{countword()} Words</p>
                <p>{text.length} Characters</p>
                {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
                <p>{0.008 * countword()} Minutes to read</p>
                <h2>-: Preview :-</h2>
                <p style={myStyle}>{text.length > 0 ? text : "Enter Something in the textbox above to preview it here..."}</p>
            </div>
        </>
    )
}
