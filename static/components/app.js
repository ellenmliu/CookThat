import React from 'react'
import '../css/home.css';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './header';
import About from './about';

const Home = () => {return(
  <section>
    <div id='pot'>
      <div id='soup'>
        <div id='spoon'></div>
      </div>
    </div>
    <div id='table'></div>
  </section>
)}

const ErrorPage = () => {return(
  <h1>404</h1>
)}

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
      </main>
    );
  }
}
