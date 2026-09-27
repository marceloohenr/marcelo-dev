import { createContext, useContext } from 'react';
import { translate, type Language } from './language';

export const LanguageContext = createContext<Language>('pt');
export function useLanguage() {
  const language = useContext(LanguageContext);
  return { language, t: (text: string) => translate(text, language) };
}
