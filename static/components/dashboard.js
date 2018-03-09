import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import '../css/index.css';

export default class Dashboard extends React.Component {
  render() {
    return (<main>
      <Header />
      <h1>Dashboard</h1>
    </main>);
  }
}

ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
