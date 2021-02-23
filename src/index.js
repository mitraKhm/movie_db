import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import Footer from './layout/footer';
import Header from './layout/header';
import MainPage from './pages/main-page';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
<MainPage />
<Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
