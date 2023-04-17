import React from 'react'
import "./index.scss"
import google from "../../../images/google.png";

export const GoogleButton = (props) => {
  return (
    <button className="GoogleButton" onClick={props.onClick}><img src={google } alt="Google"/></button>
  )
}
