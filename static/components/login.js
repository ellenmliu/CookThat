import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import '../css/index.css';

export default class Login extends React.Component {
  render() {
    return (<main>
      <Header />
      <h1>Login</h1>
    </main>);
  }
}

ReactDOM.render(<Login />, document.getElementById('login'));
