import React from 'react';
import "./Kartica.css";
function Kartica({slika,naslov,opis}) {
    return (
        <div className='cardBox'>
            <div className='imgBox'>
                <img src={slika} alt="slika kartice" />
            </div>
            <div className='content'>
                <h2>{naslov}</h2>
                <p>{opis}</p>
                <a href="https://unsplash.com/">Procitaj vise</a>
            </div>
        </div>
    )
}

export default Kartica;
