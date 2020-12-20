import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from "webfontloader";
import App from './components/App/App.jsx';
import reportWebVitals from './reportWebVitals';

WebFont.load({
  google: {
    families: ["Gayathri:100,400,700"]
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
