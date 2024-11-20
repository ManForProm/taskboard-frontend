import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.js';
import './index.css';
import store from './redux/store.js';
import reportWebVitals from './tests/perfomance/reportWebVitals.js';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Контейнер с ID 'root' не найден в DOM!");
}


reportWebVitals();