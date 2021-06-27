import * as React from 'react';

import './styles.scss';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
