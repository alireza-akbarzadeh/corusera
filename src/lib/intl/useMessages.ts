'use client';

import { useState, useEffect } from 'react';
import { type Locale, defaultLocale, type TranslationKey } from './translations';
import { translate } from './i18n';

export const useMessages = () => {
    const [locale, setLocale] = useState<Locale>(() => {
        if (typeof window === 'undefined') return defaultLocale;
        return (localStorage.getItem('lang') as Locale) || defaultLocale;
    });

    useEffect(() => {
        localStorage.setItem('lang', locale);
    }, [locale]);

    const t = (
        key: TranslationKey,
        options?: {
            values?: Record<string, string | number>;
            count?: number;
            fallback?: string;
        }
    ) => translate(key, { ...options, locale });

    return { t, locale, setLocale };
};
