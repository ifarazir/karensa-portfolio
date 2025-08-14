import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
export const locales = ['en', 'fa'] as const;
export type Locale = (typeof locales)[number];
 
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'fa'; // Default to Persian
  }
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
