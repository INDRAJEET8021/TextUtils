import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("fired "+ text);
    let newText = text.toUpperCase();

    setText(newText);
  };

  const handleUpAClick = () => {
    // console.log("fired "+ text);
    let newText1 = text.toLowerCase();

    setText(newText1);
  };

  const handleOnChange = (event) => {
    // console.log("fired2");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          placeholder="Enter Text Here"
          id="myBox"
          rows="8"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary" onClick={handleUpAClick}>
        Convert to Lower Case
      </button>
    </div>

    <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>Total Words <b>{text.split(" ").length}</b> and <b>{text.length}</b> Characters</p>
          <p><b>{0.008 * text.split(" ").length}</b> Minutes to read</p>
          <h3>Preview</h3>
          <p>{text}</p>
    </div>
    </>
  );
}
