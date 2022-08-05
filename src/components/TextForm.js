import React , {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearText = ()=>{
        let newText = '';
        setText(newText);  
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
      <>
      <div className="container py-3 my-4" style={props.Style} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange = {handleOnChange}
            style={props.StyleText}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container my-2">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length-1} words, {text.length} characters</p>
      <p>{0.008* text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
      </>
    
  );
}
