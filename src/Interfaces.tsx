import * as React from 'react';

export interface IPerson {
  title: string;
  firstName: string;
  lastName: string;
  age: number;
  height: number;
  weight: number;
  gender: string;
  city: string;
  country: string;
}

export interface IDisplay {
  name: string;
  path: string;
}
