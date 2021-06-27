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
  const keys = ['Title', 'First Name', 'Last Name', 'Age', 'Height', 'Weight', 'Gender', 'City', 'Country'];

  const characterInformation = Object.values(character).map((value, i) => {
    return (
      <li key={i} className="sidebar-list-item" >
      <span><strong>{keys[i]}:</strong> {value} {keys[i] === 'Weight' && 'lbs.' || keys[i] === 'Height' && 'in.'}</span>
    </li>
    )
  })

  return (
    <div id="right-bar">
      <div className={showRightBar ? "right-bar active" : "right-bar"}>
        <ul className="right-bar-list">
          <li className="sidebar-toggle">
            <span className="bar-button" onClick={ toggleRightBar }>
              X
            </span>
          </li>
          <li className="sidebar-list-item" >
            <span className="bar-header">
              <strong>Character Information:</strong>
            </span>
          </li>
          {characterInformation}
        </ul>
      </div>
    </div>
  )
}

export default RightBar;
