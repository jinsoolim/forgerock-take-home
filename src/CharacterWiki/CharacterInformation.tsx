import * as React from 'react';
import { IPerson } from '../Interfaces';

type ICharacterInformation = {
  character: IPerson;
};

export const CharacterInformation: React.FC<ICharacterInformation> = ({ character }) => {
  return (
    <>
      <div className="img-holder">
        <img src={'https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png'} alt={`Picture of ${character.firstName} ${character.lastName}`}/>
      </div>
      <li className="sidebar-list-item">
        <h3>{character.title} {character.firstName} {character.lastName}</h3>
        <h4>{character.city}, {character.country}</h4>
      </li>
      <li className="sidebar-list-item">
        <span><strong>Gender: </strong>{character.gender}</span>
        <span><strong>Age: </strong>{character.age} years old</span>
        <span><strong>Weight: </strong>{character.weight} lbs.</span>
        <span><strong>Height: </strong>{character.height} in.</span>
      </li>
      <div className="quote-holder">
        <span style={{ fontSize: "45px", color: "darkgray", justifyContent: "center"}}>&#10077;</span><br/>
        <p style={{ marginTop: "-35px" }}>
          {character.favoriteQuote} - {character.firstName} {character.lastName}
        </p>
      </div>
    </>
  );
};
