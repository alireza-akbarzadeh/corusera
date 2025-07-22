import { type Locale } from './translations';

export const formatDate = (date: Date, locale: Locale, options?: Intl.DateTimeFormatOptions) => {
    return new Intl.DateTimeFormat(locale, options).format(date);
};

export const formatNumber = (num: number, locale: Locale, options?: Intl.NumberFormatOptions) => {
    return new Intl.NumberFormat(locale, options).format(num);
};

export const formatCurrency = (amount: number, locale: Locale, currency: string = 'USD') => {
    return formatNumber(amount, locale, { style: 'currency', currency });
};
