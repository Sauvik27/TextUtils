import React, {useState} from 'react'


export default function TextForm(props) {

    

    const handleUpClick =  () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick =  () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleUpLow = () => {
        let newText = "";
        for(let i=0;i<text.length;i++){
            var b = text[i];
            if(i%2===0){
                b=b.toUpperCase();
            }
            else{
                b=b.toLowerCase();
            }
            newText = newText.concat(b);
        }
        setText(newText);
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
    }

    const handleOnChange =  (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={props.myStyle}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={props.myStyle}></textarea>
            </div>
            <button className={`btn btn-${props.btnColor} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className={`btn btn-${props.btnColor} mx-1`} onClick={handleLowClick}>Convert to Lowercase</button>
            <button className={`btn btn-${props.btnColor} mx-1`} onClick={handleUpLow}>Up Low Case</button>
            <button className="btn btn-outline-danger mx-1" onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-4" style={props.myStyle}>
            <h2>Your Text Summary</h2>
            <h5>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</h5>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
