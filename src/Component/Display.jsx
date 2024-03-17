import React, { useState, useEffect, createContext } from 'react';
import Card from './Card/Card';
import './Display.css';



export const Global = createContext(null)

export default function Display() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;



  useEffect(() => {
    function fetchData() {
      setTimeout(async () => {
        let data = await fetch('https://jsonplaceholder.typicode.com/posts')
        data = await data.json();
        setData(data)
        setLoading(false);
      }, 5000);

      
    }

    fetchData();
  }, []);


  if (loading) {
    return <> <div id='LoadingView'>Loading....</div>
      <div id='seconsLine'>Wait for 5 sec...</div>
    </>;
  }


  const indexLastCard = currentPage * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const currentCards = data.slice(indexFirstCard, indexLastCard);


  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / cardsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const nextOnePage = () => {
    if (currentPage < Math.ceil(data.length / cardsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 2);
    }
  };



  const handleRemoveCard = (id) => {
    setData((previousData) => previousData.filter((card) => card.id !== id));
  };

  return (
    <>
      <div id='Main'>
        {currentCards.map((d) => (
          <Global.Provider value={handleRemoveCard}>
            <Card id={d.id} Title={d.title} Body={d.body} />
          </Global.Provider>
        ))}

      </div>
      {data.length > 0 && (
        <div id="pageChange">
          <button onClick={prevPage}>1</button>
          <button onClick={nextPage}>2</button>
          <button onClick={nextOnePage}>3
          </button>
        </div>
      )}

    </>
  );
}
