import React from 'react';
import './card2.css';
//import testImg from '../assets/jason-goodman-6awfTPLGaCE-unsplash.jpg';

function Card2(props) {
  return (
    <>
      <a href={props.link}>
        <div className="card2-container">
            <img src={props.image} alt=""/>
            <div className="card2-footer">
                <span>{props.name}</span>
            </div>
        </div>
      </a>
    </>
  )
}

export default Card2