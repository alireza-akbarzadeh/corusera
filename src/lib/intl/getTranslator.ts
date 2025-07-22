import { type Locale, defaultLocale, type TranslationKey } from './translations';
import { translate } from './i18n';

export const getTranslator = (locale?: Locale) => {
    const _locale = locale || defaultLocale;

    return (
        key: TranslationKey,
        options?: {
            values?: Record<string, string | number>;
            count?: number;
            fallback?: string;
        }
    ) => translate(key, { ...options, locale: _locale });
};
