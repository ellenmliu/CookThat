import React from 'react'
import '../css/home.css';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './header';
import About from './about';
import Home from './home';
import Login from './login';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login}/>
      </Switch>
      </main>
    );
  }
}
