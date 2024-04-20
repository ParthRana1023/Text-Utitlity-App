import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("Enter Your Text Here");

  const textWithoutSpaces = text.replace(/\s/g, "");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper Case.", "Success");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case.", "Success");
  };
  const handleClClick = () => {
    setText("");
  };
  const handleCaClick = () => {
    let newText = text
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(newText);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ").trim();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
          ></textarea>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "light"
            } mx-2 my-2`}
            onClick={handleUpClick}
            disabled={text.length === 0}
          >
            CONVERT TO UPPERCASE
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "light"
            } mx-2 my-2`}
            onClick={handleLoClick}
            disabled={text.length === 0}
          >
            convert to lowercase
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "light"
            } mx-2 my-2`}
            onClick={handleClClick}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "light"
            } mx-2 my-2`}
            onClick={handleCaClick}
            disabled={text.length === 0}
          >
            Capitalise Text
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "light"
            } mx-2 my-2`}
            onClick={handleCopy}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
          <button
            className={`btn btn-${
              props.mode === "light" ? "primary" : "light"
            } mx-2 my-2`}
            onClick={handleSpaces}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word.length > 0).length} words,{" "}
          {textWithoutSpaces.length} characters
        </p>
        <p>
          {text.split(" ").filter((word) => word.length > 0).length * 0.48}{" "}
          seconds to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here."}</p>
      </div>
    </>
  );
}
