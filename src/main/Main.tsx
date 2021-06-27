import * as React from 'react';

import LeftBar from '../left/LeftBar';
import Dashboard from './Dashboard';
import PeopleData from './PeopleData';


export default function Main(): JSX.Element {
  const [display, setDisplay] = React.useState<string>('dashboard');

  return (
    <div id="main">
      <LeftBar display={display} setDisplay={setDisplay} />
      { display === 'dashboard' && <Dashboard/> }
      { display === 'peopleData' && <PeopleData/> }
    </div>
  )
}
