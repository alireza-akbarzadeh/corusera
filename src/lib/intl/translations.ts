import en from "@/locales/en.json"
import fa from "@/locales/fa.json"


export const defaultLocale = "en"


export const translations = {
    en,
    fa
}


export type Locale = keyof typeof translations;

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

type DotNestedKeys<T> = (
    T extends object
        ? {
            // @ts-ignore
            [K in Extract<keyof T, string>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}`
        }[Extract<keyof T, string>]
        : ''
    );

export type TranslationKey = DotNestedKeys<typeof en>;
