import React from 'react'
import '../css/home.css';

export default class App extends React.Component {
  render() {
    return <section>
      <div id='pot'>
        <div id='soup'>
          <div id='spoon'></div>
        </div>
      </div>
      <div id='table'></div>
    </section>;
  }
}
