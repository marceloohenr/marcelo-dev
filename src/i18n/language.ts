import { englishMessages } from './messages';
import { locales, supportedLanguages, type Language } from './locales';

export type { Language } from './locales';
export const getLanguage = (path: string): Language => supportedLanguages.find(language => path.split('/')[1] === language) ?? 'pt';
export const languagePath = (language: Language) => locales[language].path;
export function translate(text: string, language: Language) {
  return language === 'pt' ? text : englishMessages[text] ?? text;
}
