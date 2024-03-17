import React, { useContext } from 'react'
import "./Card.css"
import { Global } from '../Display'



export default function Card({ id, Title, Body }) {

  const handleRemoveCard  = useContext(Global);

  const Remove = () => {
    handleRemoveCard(id);
  };

  return (
    <>
      <div id='MainCard'>
        <div id="closeIcon" onClick={Remove}>X</div>
        <h1>{Title}</h1>
        <p id='Body'>{Body}</p>
        <p id='DateTime'>Mon,21 Dec 2020 14:57 GMT</p>
        <img src="https://t3.ftcdn.net/jpg/01/13/01/70/360_F_113017086_PtETiC3OfSiiAfK9q8egOlvdjmwORkBh.jpg" />

      </div>


    </>
  )
};
