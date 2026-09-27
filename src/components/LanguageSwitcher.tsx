import { Check, Languages } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { languagePath } from '../i18n/language';
import { locales, supportedLanguages } from '../i18n/locales';

export default function LanguageSwitcher() {
  const { language, t } = useLanguage();
  const [suffix, setSuffix] = useState('');
  const detailsRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const update = () => setSuffix(window.location.search + window.location.hash);
    const closeOutside = (event: PointerEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) detailsRef.current.open = false;
    };
    update();
    window.addEventListener('hashchange', update);
    document.addEventListener('pointerdown', closeOutside);
    return () => {
      window.removeEventListener('hashchange', update);
      document.removeEventListener('pointerdown', closeOutside);
    };
  }, []);
  return (
    <details className="language-picker" ref={detailsRef} onKeyDown={event => {
      if (event.key === 'Escape' && detailsRef.current?.open) {
        event.preventDefault(); event.stopPropagation();
        detailsRef.current.open = false;
        detailsRef.current.querySelector('summary')?.focus();
      }
    }} onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
    }}>
      <summary className="language-switch" aria-label={`${t('Escolher idioma')}: ${locales[language].label}`}>
        <Languages size={16} aria-hidden="true" /><span>{language.toUpperCase()}</span>
      </summary>
      <nav className="language-options" aria-label={t('Idiomas')}>
        {supportedLanguages.map(code => <a key={code} href={`${languagePath(code)}${suffix}`} hrefLang={code} lang={locales[code].htmlLang} aria-current={code === language ? 'page' : undefined}>
          {locales[code].label}{code === language && <Check size={14} aria-hidden="true" />}
        </a>)}
      </nav>
    </details>
  );
}
