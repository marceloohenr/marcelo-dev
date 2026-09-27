import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LanguageContext } from './i18n/LanguageContext';
import { getLanguage } from './i18n/language';

const language = getLanguage(window.location.pathname);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageContext.Provider value={language}><App /></LanguageContext.Provider>
  </StrictMode>
);
