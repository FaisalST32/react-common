import React from "react";
import "./App.css";
import Button from "./common/button/button";

function App() {
  const clickHandler = () => {
    console.log("button clicked");
  };
  return (
    <React.Fragment>
      <Button click={clickHandler}>Hello World</Button><br/><br/>
      <Button click={clickHandler}>Hello World</Button><br/><br/>
      <Button click={clickHandler}>Hello World</Button><br/><br/>
    </React.Fragment>
  );
}

export default App;
