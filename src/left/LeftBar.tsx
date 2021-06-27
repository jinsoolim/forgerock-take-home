import * as React from 'react';

type LeftBarProps = {
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

const LeftBar: React.FC<LeftBarProps> = ({ display, setDisplay }) => {
  return (
    <div id="left-bar">
      <ul>
        <li className="left-bar-links" onClick={() => setDisplay('dashboard')}>Dashboard</li>
        <li className="left-bar-links" onClick={() => setDisplay('peopleData')}>People Data</li>
      </ul>
    </div>
  )
}

export default LeftBar;
