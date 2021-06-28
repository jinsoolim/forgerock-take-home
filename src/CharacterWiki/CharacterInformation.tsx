import * as React from 'react';
import { IPerson } from '../Interfaces';

type ICharacterInformation = {
  character: IPerson;
};

// Image used is just a placeholder, in production image would also have to be fetched or part of the character data that is fetched.

export const CharacterInformation: React.FC<ICharacterInformation> = ({ character }) => {
  const { title, firstName, lastName, city, country, gender, age, weight, height, image, favoriteQuote } = character;

  return (
    <>
      <div className="img-holder">
        <img src={'https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png'} alt={`Picture of ${character.firstName} ${character.lastName}`}/>
      </div>
      <li className="sidebar-list-item">
        <h3>{title} {firstName} {lastName}</h3>
        <h4>{city}, {country}</h4>
      </li>
      <li className="sidebar-list-item">
        <span><strong>Gender: </strong>{gender}</span>
        <span><strong>Age: </strong>{age} years old</span>
        <span><strong>Weight: </strong>{weight} lbs.</span>
        <span><strong>Height: </strong>{height} in.</span>
      </li>
      <div className="quote-holder">
        <span style={{ fontSize: "45px", color: "darkgray", justifyContent: "center"}}>&#10077;</span><br/>
        <p style={{ marginTop: "-35px" }}>
          {favoriteQuote} - {firstName} {lastName}
        </p>
      </div>
    </>
  );
};
