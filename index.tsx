import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './components/LanguageContext';

// ルート要素を取得
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

// React 18 の createRoot
const root = ReactDOM.createRoot(rootElement);

// ここが一番大事：basename に import.meta.env.BASE_URL を渡す
root.render(
  <React.StrictMode>
<LanguageProvider>
  <HashRouter>
    <App />
  </HashRouter>
</LanguageProvider>
  </React.StrictMode>
);
