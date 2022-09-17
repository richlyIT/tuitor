import React from 'react';
import './card1.css';
//import logo from '../assets/jason-goodman-6awfTPLGaCE-unsplash.jpg';
//import lego from '../assets/quotes.png';



function Card1(props) {

  return (
    <>
      <div className="card-container">
        <img src={props.image} alt="" style={{width: 50, height: 50, position: 'absolute', right: 25}}/>
        <p className='card-text'>
        Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is simply dummy textLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
        <div className="card-footer">
          <img src={props.profilePic} alt="" style={{width: 50, height: 50, margin: '0 15px 0 0'}}/>
          <span>{props.name}</span>
        </div>
      </div>
    </>
  )
}

export default Card1