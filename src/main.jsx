import React from 'react';
import App from './App';
import axios from 'axios';
 import "./index.css";
import ReactDOM from "react-dom/client";
 import "flowbite";
import withLoadingSpinner from './Spinner/withLoadingSpinner';

const AppWithLoadingSpinner = withLoadingSpinner(App, axios);

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppWithLoadingSpinner />
  </React.StrictMode>
);