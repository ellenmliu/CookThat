import React from 'react'
import Header from './header';
import Home from './home';
import '../css/home.css';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Home />
      </main>
    );
  }
}
