import {
  translations,
  defaultLocale,
  type Locale,
  type TranslationKey,
} from './translations';

type InterpolationValues = Record<string, string | number>;

const interpolate = (template: string, values?: InterpolationValues) => {
  if (!values) return template;
  return template.replace(
    /{(.*?)}/g,
    (_, key) => values[key]?.toString() ?? ''
  );
};

type TranslateOptions = {
  locale?: Locale;
  values?: InterpolationValues;
  count?: number;
  fallback?: string;
};

export const translate = (
  key: string,
  {
    locale,
    values,
    fallback,
  }: {
    locale: 'en' | 'fa';
    values?: Record<string, string | number>;
    fallback?: string;
  }
): string => {
  const keys = key.split('.');
  let result: any = translations[locale];

  for (const k of keys) {
    result = result?.[k];
    if (result === undefined) break;
  }

  if (typeof result === 'string') {
    if (values) {
      return Object.entries(values).reduce(
        (str, [k, v]) => str.replaceAll(`{${k}}`, String(v)),
        result
      );
    }
    return result;
  }

  return fallback || key; // fallback to key if not found
};
