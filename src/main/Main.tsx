import * as React from 'react';

import LeftBar from '../left/LeftBar';
import Dashboard from './Dashboard';
import PeopleData from './PeopleData';


export default function Main(): JSX.Element {
  const [display, setDisplay] = React.useState<string>('/');


  // Didn't use React Router to lessen the size of challenge. Used conditional rendering instead to imitate routing
  return (
    <>
      <div id="sidebar">
        <LeftBar setDisplay={setDisplay} />
      </div>
      <div id="main">
        { display === '/' && <Dashboard/> }
        { display === '/peopleData' && <PeopleData/> }
      </div>
    </>
  )
}
