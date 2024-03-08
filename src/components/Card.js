import React from 'react'
import {FaShareAlt , FaHeart  } from "react-icons/fa";
import { RiMessage2Fill } from  'react-icons/ri'
import './Card.css';

const card = (props) => {
  return (
    <div id="card">
      <div className='left-side'>
        <div className='movie-detials'>
            <img src={props.imgUrl}></img>
            <div className='more-detials'>
                <h2>{props.movieName}</h2>
                <h4>{props.realeaseYear}</h4>
                <div id="duration">
                    <ul className='min'>{props.duration} </ul>
                    <p>{props.genres}</p>
                </div>
            </div>
        </div>
        <p id="dec">{props.description}</p>
        <ul id="links">
        <li><FaShareAlt /></li>
        <li><FaHeart /></li>
        <li><RiMessage2Fill /></li>
     </ul>
      </div>
    </div>
  )
}

export default card
