'use client';

import { locales } from '@/i18n/request';
import { useRouter, useParams } from 'next/navigation';

export default function LanguageSwitcher() {
  const params = useParams();
  const currentLocale = params.locale as string;
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    // Simple navigation to the new locale homepage
    router.push(`/${newLocale}`);
  };
  
  return (
    <div className="flex items-center gap-2">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        
        return (
          <button
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className={`px-2 py-1 text-sm rounded transition-colors ${
              isActive 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            {locale === 'fa' ? 'فا' : 'EN'}
          </button>
        );
      })}
    </div>
  );
}
