import {translations, defaultLocale, type Locale, type TranslationKey} from './translations';

type InterpolationValues = Record<string, string | number>;

const interpolate = (template: string, values?: InterpolationValues) => {
    if (!values) return template;
    return template.replace(/{(.*?)}/g, (_, key) => values[key]?.toString() ?? '');
};

type TranslateOptions = {
    locale?: Locale;
    values?: InterpolationValues;
    count?: number;
    fallback?: string;
};

export const translate = (
    key: TranslationKey,
    options: TranslateOptions = {}
): string => {
    const {
        locale = defaultLocale,
        values,
        count,
        fallback = key,
    } = options;

    const messages = translations[locale] as any;
    let text = messages[key];

    // Fallback for pluralization
    if (count != null) {
        const pluralKey = `${key}_plural`;
        if (count > 1 && messages[pluralKey]) {
            text = messages[pluralKey];
        }
    }

    if (!text) {
        console.warn(`[i18n] Missing translation: "${key}" in "${locale}"`);
        return fallback;
    }

    // ✅ Only include `count` if it's defined
    const interpolationValues: InterpolationValues = {
        ...values,
        ...(count !== undefined ? { count } : {}),
    };

    return interpolate(text, interpolationValues);
};
