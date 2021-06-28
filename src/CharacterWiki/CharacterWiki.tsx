import * as React from 'react';
import { IPerson } from '../Interfaces';
import { CharacterInformation } from './CharacterInformation';
import '../styles/Sidebars.scss';

type ICharacterWikiProps = {
  character: IPerson;
  showCharacterWiki: boolean;
  setShowCharacterWiki: React.Dispatch<React.SetStateAction<boolean>>;
};

const CharacterWiki: React.FC<ICharacterWikiProps> = ({ character, showCharacterWiki, setShowCharacterWiki }) => {

  return (
    <div id="right-bar">
      <div className={showCharacterWiki ? "right-bar active" : "right-bar"}>
        <ul className="right-bar-list">
          <li className="sidebar-toggle">
            <div className="bar-button" onClick={ () => setShowCharacterWiki(false) }>
              X
            </div>
          </li>
          <CharacterInformation character={character} />
        </ul>
      </div>
    </div>
  );
};

export default CharacterWiki;
