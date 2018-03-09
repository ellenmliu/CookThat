import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import '../css/index.css';

export default class About extends React.Component {
  render() {
    return (<main>
      <Header />
      <h1>About</h1>
    </main>);
  }
}

ReactDOM.render(<About />, document.getElementById('about'));
