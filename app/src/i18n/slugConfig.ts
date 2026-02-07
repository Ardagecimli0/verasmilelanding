// Slug to Language Configuration
// Maps URL slugs to their corresponding language codes

export type Locale = 'en' | 'fr' | 'it' | 'es' | 'de' | 'tr';

export interface SlugConfig {
    slug: string;
    locale: Locale;
    title: string;
}

// URL slugs mapped to languages
export const slugToLocale: Record<string, Locale> = {
    'dental-implant-turkey': 'en',
    'implants-dentaires-turquie': 'fr',
    'impianti-dentali-turchia': 'it',
    'implantes-dentales-turquia': 'es',
    'zahnimplantate-tuerkei': 'de',
    'dis-implanti-turkiye': 'tr',
};

// Reverse mapping: locale to slug
export const localeToSlug: Record<Locale, string> = {
    en: 'dental-implant-turkey',
    fr: 'implants-dentaires-turquie',
    it: 'impianti-dentali-turchia',
    es: 'implantes-dentales-turquia',
    de: 'zahnimplantate-tuerkei',
    tr: 'dis-implanti-turkiye',
};

// All supported locales
export const supportedLocales: Locale[] = ['en', 'fr', 'it', 'es', 'de', 'tr'];

// Default locale
export const defaultLocale: Locale = 'en';

// Get locale from URL slug
export function getLocaleFromSlug(slug: string): Locale | null {
    return slugToLocale[slug] || null;
}

// Get slug for a locale
export function getSlugForLocale(locale: Locale): string {
    return localeToSlug[locale];
}

// Check if slug is valid
export function isValidSlug(slug: string): boolean {
    return slug in slugToLocale;
}

// Language display names
export const localeNames: Record<Locale, string> = {
    en: 'English',
    fr: 'Français',
    it: 'Italiano',
    es: 'Español',
    de: 'Deutsch',
    tr: 'Türkçe',
};
