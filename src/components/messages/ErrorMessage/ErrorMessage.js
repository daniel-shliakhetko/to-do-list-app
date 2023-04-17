import React from 'react';
import "./index.scss";

export const ErrorMessage = (props) => {
  return (
    <div className='ErrorMessage'>{props.error}</div>
  )
}
