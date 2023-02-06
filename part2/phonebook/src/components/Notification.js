import React from "react";
import "../index.css";

const Notification = ({ message, state }) => {
  const badnoti = {
      color: 'red',
      background: 'lightgrey',
      fontSize: '20px',
      borderStyle: 'solid',
      paddingTop: '5px',
      borderRadius: '5px',
      padding: '10px',
      marginBottom: '10px',
  }

  const noti = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    paddingTop: '5px',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  }

  if (message === null) {
    console.log(`mess: ${message}`);
    return null;
  }
  if (state === true) {
    return <div >
      <br />
      <li style={noti}>{message}</li>
    </div>
  } else {
      if (state === false){
        return <div >
        <br />
         <li style={badnoti}>{message}</li>
        </div>;
      }
  }
};

export default Notification;
