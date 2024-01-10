import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/base";

function Input({
  handleDirection,

  handleFocusClick,
}) {
  const [formData, setFormData] = useState("");
  const [info, setInfo] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Use formData to update start and end points
    // This is a placeholder, you might want to perform geocoding or other actions
    // setStartPoint(e.value);
    // setEndPoint(e.value);
    setFormData(e.target.value);
    setInfo(formData);
    extractPaths(formData);
  };

  const handleInputChange = (e) => {
    setFormData(e.target.value);
  };

  // const handleInputFocus = (name, e) => {
  //   handleFocusClick(name, e);
  // };

  const extractPaths = (textInput) => {
    const paths = [];
    const regex = /Path:\s(\d+(?:\s\d+)*)/g;
    let match;

    while ((match = regex.exec(textInput)) !== null) {
      paths.push(match[1].split(" ").map(Number));
    }
    handleDirection(paths);
  };

  // const extractInfo = (textInput) => {

  //   const result = [];

  //   // while ((matches = regex.exec(textInput)) !== null) {
  //   //   const totalDistance = matches[1];
  //   //   const path = matches[2];
  //   //   result.push(`Total Distance: ${totalDistance}, Path: ${path}`);
  //   // }

  //   console.log(result);
  // };

  return (
    <div
      style={{
        zIndex: 1000,
        position: "relative",
        width: "20vw",
        top: 10,
        left: 10,
        borderRadius: 12,
        transition: "none",
        backgroundColor: "white",
        padding: 5,
        cursor: "default",
      }}
    >
      <form
        onSubmit={handleFormSubmit}
        style={{
          width: "auto",
          display: "flex",
          gap: 3,
          flexDirection: "column",
        }}
      >
        <TextField
          label="Input"
          placeholder="Output from C++"
          variant="outlined"
          name="input"
          value={formData}
          onChange={handleInputChange}
          sx={{ backgroundColor: "white", pb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "white",
            height: 20,
            borderRadius: 12,
            borderColor: "#1976d2",
          }}
        >
          Submit
        </Button>
        {info && <div style={{ fontSize: 18, marginTop: 10 }}>{info}</div>}
      </form>
    </div>
  );
}

export default Input;
