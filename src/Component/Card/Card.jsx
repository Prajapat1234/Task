import React from 'react'
import "./Card.css"
export default function Card(props) {

  const Remove = () => {
    props.handleRemoveCard(props.id);
  };

  return (
    <>
      <div id='MainCard'>
        <span id="closeIcon" onClick={Remove}>X</span>
        <h1>{props.Title}</h1>
        <p id='Body'>{props.Body}</p>
        <p id='DateTime'>Mon,21 Dec 2020 14:57 GMT</p>
        <img src="https://t3.ftcdn.net/jpg/01/13/01/70/360_F_113017086_PtETiC3OfSiiAfK9q8egOlvdjmwORkBh.jpg" />

      </div>

      
    </>
  )
}
