import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //Kahan dikhana hai
//document mein root ID waley element mein dikhana hai
root.render( // React renders on Mount and rerenders on setState is caleed and props change 
  //Kyah dikhana hai
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* 
ReactDOM.render(
  <React.StrictMode>
  <App/>               //Kyah dikhana hai
  </React.StrictMode>
  document.getElementById('root')    //Kahan dikhana hai
  
  //document mein root ID waley element mein dikhana hai
);
*/