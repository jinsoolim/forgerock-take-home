import * as React from 'react';
import Displays from './Displays';
import '../../styles/Sidebars.scss';
import { IDisplay } from '../../Interfaces';
import hamburger from '../../styles/assets/svg/hamburger.svg';

type NavBarProps = {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<NavBarProps> = ({ setDisplay }) => {
  const [showSideBar, setShowSideBar] = React.useState(false);

  const navBarItems = Displays.map((item: IDisplay, index: number) => {
    return (
      <li key={index} className="sidebar-list-item" onClick={() => setDisplay(item.path)}>
        <span>{item.name}</span>
      </li>
    )
  });

  return (
    <>
      <div className="navbar">
        <div className="bar-button" onClick={ () => setShowSideBar(true) }>
          <svg viewBox="0 0 100 80" width="20" height="20" fill="#000">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
        <h1>The Office Character Chart</h1>
      </div>
      <div className={showSideBar ? "left-bar active" : "left-bar"}>
        <ul className="left-bar-list">
          <li className="sidebar-toggle">
            <div className="bar-button" onClick={ () => setShowSideBar(false) }>
              X
            </div>
          </li>
          {navBarItems}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
