import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { type Locale, defaultLocale, getLocaleFromSlug } from './slugConfig';

// Import all translation files
import enVera from './en-vera.json';
import frVera from './fr-vera.json';
import itVera from './it-vera.json';
import esVera from './es-vera.json';
import deVera from './de-vera.json';
import trVera from './tr-vera.json';

// Type definitions
type TranslationValue = string | Record<string, unknown>;
type Translations = Record<string, TranslationValue>;

// Type definitions

interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string, params?: Record<string, string | number>) => string;
}

// Available translations
const translations: Record<Locale, Translations> = {
    en: enVera as Translations,
    fr: frVera as Translations,
    it: itVera as Translations,
    es: esVera as Translations,
    de: deVera as Translations,
    tr: trVera as Translations,
};

// Create context
const I18nContext = createContext < I18nContextType | undefined > (undefined);

// Get nested value from object by dot notation path
function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
    const keys = path.split('.');
    let current: unknown = obj;

    for (const key of keys) {
        if (current === null || current === undefined || typeof current !== 'object') {
            return undefined;
        }
        current = (current as Record<string, unknown>)[key];
    }

    return typeof current === 'string' ? current : undefined;
}

// Interpolate params into string
function interpolate(str: string, params?: Record<string, string | number>): string {
    if (!params) return str;

    return str.replace(/\{(\w+)\}/g, (_, key) => {
        return params[key]?.toString() ?? `{${key}}`;
    });
}

// Detect locale from URL
function detectLocaleFromURL(): Locale {
    if (typeof window === 'undefined') return defaultLocale;

    const pathname = window.location.pathname;
    const slug = pathname.split('/').filter(Boolean)[0];

    if (slug) {
        const detectedLocale = getLocaleFromSlug(slug);
        if (detectedLocale) {
            return detectedLocale;
        }
    }

    return defaultLocale;
}

// Provider component
interface I18nProviderProps {
    children: ReactNode;
    initialLocale?: Locale;
}

export function I18nProvider({ children, initialLocale }: I18nProviderProps) {
    const [locale, setLocaleState] = useState < Locale > (() => {
        return initialLocale || detectLocaleFromURL();
    });

    // Update locale when URL changes
    useEffect(() => {
        const handlePopState = () => {
            const newLocale = detectLocaleFromURL();
            setLocaleState(newLocale);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
    }, []);

    const t = useCallback(
        (key: string, params?: Record<string, string | number>): string => {
            const localeTranslations = translations[locale];

            if (!localeTranslations || Object.keys(localeTranslations).length === 0) {
                // Fallback to English if locale translations are empty
                const fallbackTranslation = getNestedValue(translations.en as Record<string, unknown>, key);
                if (fallbackTranslation) {
                    return interpolate(fallbackTranslation, params);
                }
                console.warn(`Translation missing for key: "${key}" in locale: "${locale}" and fallback`);
                return key;
            }

            const translation = getNestedValue(localeTranslations as Record<string, unknown>, key);

            if (translation === undefined) {
                // Fallback to English
                const fallbackTranslation = getNestedValue(translations.en as Record<string, unknown>, key);
                if (fallbackTranslation) {
                    return interpolate(fallbackTranslation, params);
                }
                console.warn(`Translation missing for key: "${key}" in locale: "${locale}"`);
                return key;
            }

            return interpolate(translation, params);
        },
        [locale]
    );

    const value: I18nContextType = {
        locale,
        setLocale,
        t,
    };

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// Hook to use translations
export function useTranslations(namespace?: string) {
    const context = useContext(I18nContext);

    if (!context) {
        throw new Error('useTranslations must be used within an I18nProvider');
    }

    const { t: translate, locale, setLocale } = context;

    const t = useCallback(
        (key: string, params?: Record<string, string | number>): string => {
            const fullKey = namespace ? `${namespace}.${key}` : key;
            return translate(fullKey, params);
        },
        [namespace, translate]
    );

    return { t, locale, setLocale };
}

// Hook to get current locale
export function useLocale() {
    const context = useContext(I18nContext);

    if (!context) {
        throw new Error('useLocale must be used within an I18nProvider');
    }

    return {
        locale: context.locale,
        setLocale: context.setLocale,
    };
}

// Utility function for use outside of React components
export function getTranslation(key: string, locale: Locale = 'en'): string {
    const localeTranslations = translations[locale];

    if (!localeTranslations || Object.keys(localeTranslations).length === 0) {
        const fallback = getNestedValue(translations.en as Record<string, unknown>, key);
        return fallback ?? key;
    }

    const translation = getNestedValue(localeTranslations as Record<string, unknown>, key);
    return translation ?? key;
}

export default I18nProvider;
