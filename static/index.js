import React from 'react'
import ReactDOM from 'react-dom';
import Header from './components/header';
import Home from './components/home';
import './css/index.css';
import './css/home.css';

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

ReactDOM.render(<App />, document.getElementById('app'));
