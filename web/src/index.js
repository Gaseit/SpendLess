import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importar todos los componentes creados
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductInfo from "./components/ProductInfo";
import Legal from "./components/Pages/Legal";
import Privacity from "./components/Pages/Privacity";
import Cookies from "./components/Pages/Cookies";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import Contact from "./components/Pages/Contact";
import Error404 from "./components/Pages/Error404.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export {
  Header, Footer, Products, ProductInfo, Legal, Privacity, Cookies, Register, Login, Contact, Error404
}
