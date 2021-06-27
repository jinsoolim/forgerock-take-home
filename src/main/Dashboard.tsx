import * as React from 'react';
import BubbleChart from './BubbleChart';
import Data from './Data';

// Normally Data would be fetched but for challenge just imported a fake file

export default function Dashboard(): JSX.Element {
  const [width, setWidth] = React.useState(800);
  const [height, setHeight] = React.useState(600);

  return (
    <div className="main-display">
      <BubbleChart data={Data} width={width} height={height}/>
    </div>
  )
}
