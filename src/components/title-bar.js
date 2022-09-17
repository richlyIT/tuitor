import React from 'react';
import './title-bar.css';
function TitleBar(props) {
  return (
    <div className="container Title-container">
        <span>{props.title}</span>
        <a className="title-colored" href={props.link}>View All</a>
    </div>
  )
}

export default TitleBar