import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const searchParams = new URLSearchParams(window.location.search);
if (searchParams.get('preview') === '1') {
  document.documentElement.setAttribute('data-share-preview', '1');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

