/* Header.js */

import React from "react"

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  };
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "" }}>
        Simple Todo App <span id="inH1"></span>
      </h1>
      <h3 style={{ fontSize: "12px", marginBottom: "15px", marginTop: "-10px" }}>by Adrian Grabkowski</h3>
      <p style={{ fontSize: "19px" }}>
        Please add to-dos item(s) through the input field
      </p>
    </header>
  )
}

export default Header