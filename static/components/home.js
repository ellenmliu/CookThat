import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';

export default class Home extends React.Component {
  render() {
    return (<section>
      <div id='pot'>
        <div id='soup'>
          <div id='spoon'></div>
        </div>
      </div>
      <div id='table'></div>
    </section>);
  }
}
