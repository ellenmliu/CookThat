import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/app'
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('app'));

//ReactDOM.render(<section><Header /><App /></section>, document.getElementById('app'));
