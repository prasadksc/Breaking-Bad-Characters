import React from 'react';
import { Link } from 'react-router-dom';


const CharacterItem = ({img,id,birthday,occupation,status,name}) => {
    return (
        <Link to={`/characters/${id}`} style={{ textDecoration: "none" }}> 
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={img} alt="" />
                </div>
                <div className="flip-card-back">
                    <h3>{name}</h3>
                    <hr />
                    <p><strong>Occupation : </strong>{occupation}</p>
                    <p><strong>Birthday   : </strong>{birthday}</p>
                    <p><strong>Status     : </strong>{status}</p>
                </div>
            </div>
        </div>
        </Link>
    )
}
 
export default CharacterItem;