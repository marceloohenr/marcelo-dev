export const supportedLanguages = ['pt', 'en'] as const;
export type Language = (typeof supportedLanguages)[number];
export const locales: Record<Language, { label: string; htmlLang: string; ogLocale: string; path: string }> = {
  pt: { label: 'Português', htmlLang: 'pt-BR', ogLocale: 'pt_BR', path: '/' },
  en: { label: 'English', htmlLang: 'en', ogLocale: 'en_US', path: '/en/' },
};
