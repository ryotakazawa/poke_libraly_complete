import React from 'react';

function Card({ pokemon }) {
  return(
    <div className="Card">
      <div className="Card_img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="Card_types">
        {pokemon.name}
      </div>
      <div className="Card_types">
        {
          pokemon.types.map(type => {
            return(
              <div className="Card_type">

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Card;