import * as React from 'react';
import NavBar from '../NavBar/NavBar';
import Dashboard from './Dashboard';
import PeopleData from './PeopleData';

export default function Main(): JSX.Element {
  const [display, setDisplay] = React.useState<string>('/');

  return (
    <>
      <div id="sidebar">
        <NavBar setDisplay={setDisplay} />
      </div>
      <div id="main">
        { display === '/' && <Dashboard/> }
        { display === '/peopleData' && <PeopleData/> }
      </div>
    </>
  );
};
