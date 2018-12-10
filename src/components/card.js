import React from 'react';
import './card.css';

const Card = (prop)=>{
    const {id,name,email} = prop;
    return (
        <div className="card grow ma2 pa3 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="friend"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;