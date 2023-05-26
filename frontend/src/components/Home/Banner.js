import React from "react";
import logo from "../../imgs/logo.png";

const Banner = () => {
  const [message, setMessage] = React.useState("");

  const messageChangeHandler = e => {
    e.preventDefault();
    setMessage(e.target.value);
    console.log('user entered:', e.target.value);

    // if(message >= 3){

    // }
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span>A place to <span id="get-part">get</span></span>
          <input onChange={messageChangeHandler} value={message} placeholder="What is it you truly desire?"
            style={{ width: "15rem", margin: "0px 10px", borderRadius: "5px", borderWidth: "0" }} />
          <span> the cool stuff</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
