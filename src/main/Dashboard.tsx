import * as React from 'react';
import BubbleChart from './BubbleChart';
import RightBar from '../right/RightBar';
import Data from './Data';
import { IPerson } from '../Interfaces';

// Normally Data would be fetched but for challenge just imported a fake file

export default function Dashboard(): JSX.Element {
  const [width, setWidth] = React.useState(800);
  const [height, setHeight] = React.useState(600);
  const [showRightBar, setShowRightBar] = React.useState(false);
  const [character, setCharacter] = React.useState<IPerson>({
    title: '',
    firstName: '',
    lastName: '',
    age: 0,
    height: 0,
    weight: 0,
    gender: '',
    city: '',
    country: '',
  });

  return (
    <>
      <div className="main-display">
        <BubbleChart data={Data} width={width} height={height} setCharacter={setCharacter} setShowRightBar={setShowRightBar} />
      </div>
      <RightBar character={character} showRightBar={showRightBar} setShowRightBar={setShowRightBar} />
    </>
  )
}
