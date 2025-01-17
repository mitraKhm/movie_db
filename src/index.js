import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './layout/footer';
import Header from './layout/header';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './store';
import RouterProvider from './router';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <Header />
 <RouterProvider>

 </RouterProvider>
    <Footer />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
