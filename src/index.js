import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import AccountsComponent from './component/accounts-component';
import AccountGraphComponent from './component/account-graph-component';
// import VisNetwork from './component/samples/VisNetwork'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AccountsComponent /> */}
    <AccountGraphComponent accNo="0201894993002" />
    {/* <VisNetwork/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
