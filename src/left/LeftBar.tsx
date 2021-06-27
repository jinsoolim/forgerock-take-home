import * as React from 'react';

type LeftBarProps = {
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

const LeftBar: React.FC<LeftBarProps> = ({ display, setDisplay }) => {
  const [showSideBar, setShowSideBar] = React.useState(false);

  return (
    <>
      <button onClick={ ()=> setShowSideBar(!showSideBar) }>
        <svg viewBox="0 0 100 80" width="20" height="20">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </button>
      { showSideBar &&
        <div id="left-bar">
          <ul>
            <li className="left-bar-links" onClick={() => setDisplay('dashboard')}>Dashboard</li>
            <li className="left-bar-links" onClick={() => setDisplay('peopleData')}>People Data</li>
          </ul>
        </div>
      }
    </>
  )
}

export default LeftBar;
