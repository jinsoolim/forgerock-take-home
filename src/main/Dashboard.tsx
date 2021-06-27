import * as React from 'react';
import BubbleChart from './BubbleChart';

const data = [
  {
    title: 'Mr.',
    firstName: 'Jim',
    lastName: 'Halpert',
    age: 43,
    height: 75,
    weight: 180,
    gender: 'Male',
    city: 'Stanton',
    country: 'USA',
  },
  // {
  //   title: 'Mrs.',
  //   firstName: 'Pamela',
  //   lastName: 'Halpert',
  //   age: 42,
  //   height: 66,
  //   weight: 126,
  //   gender: 'Female',
  //   city: 'Stanton',
  //   country: 'USA',
  // },
  // {
  //   title: 'Mr.',
  //   firstName: 'Michael',
  //   lastName: 'Scott',
  //   age: 56,
  //   height: 69,
  //   weight: 160,
  //   gender: 'Male',
  //   city: 'Boulder',
  //   country: 'Germany',
  // },
  // {
  //   title: 'Mr.',
  //   firstName: 'Dwight',
  //   lastName: 'Schrute',
  //   age: 51,
  //   height: 74,
  //   weight: 185,
  //   gender: 'Male',
  //   city: 'Stanton',
  //   country: 'USA',
  // },
  // {
  //   title: 'Mr.',
  //   firstName: 'Kevin',
  //   lastName: 'Malone',
  //   age: 43,
  //   height: 73,
  //   weight: 194,
  //   gender: 'Male',
  //   city: 'Stanton',
  //   country: 'USA',
  // },
  // {
  //   title: 'Mrs.',
  //   firstName: 'Holly',
  //   lastName: 'Flax',
  //   age: 48,
  //   height: 63,
  //   weight: 130,
  //   gender: 'Female',
  //   city: 'Boulder',
  //   country: 'USA',
  // },
  // {
  //   title: 'Mr.',
  //   firstName: 'Andy',
  //   lastName: 'Bernard',
  //   age: 48,
  //   height: 71,
  //   weight: 180,
  //   gender: 'Male',
  //   city: 'Ithaca',
  //   country: 'USA',
  // },
  // {
  //   title: 'Mrs.',
  //   firstName: 'Angela',
  //   lastName: 'Schrute',
  //   age: 47,
  //   height: 61,
  //   weight: 90,
  //   gender: 'Female',
  //   city: 'Stanton',
  //   country: 'USA',
  // },
  // {
  //   title: 'Mrs.',
  //   firstName: 'Phyllis',
  //   lastName: 'Vance',
  //   age: 55,
  //   height: 67,
  //   weight: 170,
  //   gender: 'Female',
  //   city: 'Stanton',
  //   country: 'USA',
  // }
]

// const data = [
//   10, 30, 40, 20,
//   10, 40, 30, 20, 50, 10,
//   60, 30, 40, 20, 30
// ];

export default function Dashboard(): JSX.Element {
  // DATA NEEDS TO BE FETCHED WHEN DASHBOARD IS RENDERED
  const [width, setWidth] = React.useState(600);
  const [height, setHeight] = React.useState(400);

  return (
    <div className="main-display">
      <BubbleChart data={data} width={width} height={height}/>
    </div>
  )
}
