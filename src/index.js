import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
function MyInfo() {
  return(
    <div>
      <h1>José Antonio Lome </h1>
      <p>Paragraph</p>
      <ul>
        <li>Brazil</li>
        <li>Canada</li>
        <li>Europe</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode><MyInfo /></React.StrictMode>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
