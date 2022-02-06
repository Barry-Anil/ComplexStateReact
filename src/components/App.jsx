import React, { useState } from "react";

function App() {
  // const [fnameText, setFnameText] = useState("");
  // const [lnameText, setLnameText] = useState("");

  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });

  // function handlingFname(event){
  //   setFnameText(event.target.value)
  // }

  // function handlingLname(event){
  //   setLnameText(event.target.value);
  // }
  function handleChange(event) {
    const { name, value } = event.target;

    setFullName((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value
        };
      }
    });
  }

  // function onClicked(event){
  //   setFnameText(fnameText);
  //   setLnameText(lnameText);
  //   event.preventDefault();
  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          onChange={handleChange}
          value={fullName.fname}
          name="fname"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={fullName.lname}
          name="lname"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
