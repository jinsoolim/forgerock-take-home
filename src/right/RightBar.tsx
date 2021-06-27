import * as React from 'react';
import { IPerson } from '../Interfaces';

import '../Sidebars.scss';

type IRightBarProps = {
  character: IPerson;
  showRightBar: boolean;
  setShowRightBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const RightBar: React.FC<IRightBarProps> = ({ character, showRightBar, setShowRightBar }) => {

  const toggleRightBar = () => setShowRightBar(false);

  const characterInformation = [];
  let i = 0;
  for (let key in character) {
    const listInformation = (<li key={i} className="sidebar-list-item" >
      <span>{key}: {character[key]}</span>
    </li>)
    characterInformation.push(listInformation);
    i+=1;
  }

  return (
    <div id="right-bar">
      <div className={showRightBar ? "right-bar active" : "right-bar"}>
        <ul className="right-bar-list">
          <li className="sidebar-toggle">
            <span className="bar-button" onClick={ toggleRightBar }>
              X
            </span>
          </li>
          {characterInformation}
        </ul>
      </div>
    </div>
  )
}

export default RightBar;
