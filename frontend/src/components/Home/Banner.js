import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent"

const Banner = (props) => {
  const [message, setMessage] = React.useState("");

  const onSearchTitleChange = (event) => {
    
    if(message.length >= 2){
      props.onSearchFilter(
        event.target.value,
        (page) => agent.Items.byTitle(event.target.value),
        agent.Items.byTitle(event.target.value)
        
      )
    }
    setMessage(event.target.value);
    // console.log('user entered:', event.target.value);

  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span>A place to <span id="get-part">get</span></span>
          <form>
            <input 
              onChange={onSearchTitleChange} 
              value={message} 
              placeholder="What is it you truly desire?"
              style={{ 
                width: "15rem", 
                margin: "0px 10px", 
                borderRadius: "5px", 
                borderWidth: "0" }} />
            </form>
          <span> the cool stuff</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
