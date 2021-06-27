import * as React from 'react';
import Displays from './Displays';

import '../Sidebars.scss';
import { IDisplay } from '../Interfaces';


type LeftBarProps = {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

const LeftBar: React.FC<LeftBarProps> = ({ setDisplay }) => {
  const [showSideBar, setShowSideBar] = React.useState(false);

  const toggleSideBar = () => setShowSideBar(!showSideBar);

  // Used svg for hamburger icon and brought in Displays to show that list items can be scalable

  return (
    <>
      <div className="navbar">
        <span className="bar-button" onClick={ toggleSideBar }>
          <svg viewBox="0 0 100 80" width="20" height="20" fill="#fff">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </span>
        <h1>The Office Character Chart</h1>
      </div>
      <div className={showSideBar ? "left-bar active" : "left-bar"}>
        <ul className="left-bar-list">
          <li className="sidebar-toggle">
            <span className="bar-button" onClick={ toggleSideBar }>
              X
            </span>
          </li>
          {
            Displays.map((item: IDisplay, index: number) => {
              return (
                <li key={index} className="sidebar-list-item" onClick={() => setDisplay(item.path)}>
                  <span>{item.name}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default LeftBar;
