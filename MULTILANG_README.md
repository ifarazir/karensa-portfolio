# Karensa Portfolio - Multi-Language Implementation

This project has been successfully converted to support multi-language functionality with Persian (RTL) and English (LTR) support.

## 🌍 Language Support

- **Persian (fa)** - Default language, RTL layout
- **English (en)** - LTR layout

## 🚀 Features Implemented

### 1. Internationalization Setup
- ✅ Next-intl integration for i18n
- ✅ Locale-based routing (`/fa` and `/en`)
- ✅ Automatic redirect from root to default locale (Persian)
- ✅ Dynamic metadata based on locale

### 2. Layout & Styling
- ✅ RTL/LTR text direction support
- ✅ Persian font (Yekan Bakh) for RTL content
- ✅ Inter font for English content
- ✅ Responsive design maintained in both languages

### 3. Content Localization
- ✅ All UI text translated (navigation, headings, descriptions)
- ✅ Project data structure with both Persian and English content
- ✅ Dynamic year display (Persian years for FA, Gregorian for EN)

### 4. Navigation
- ✅ Language switcher component
- ✅ Locale-aware links
- ✅ Maintained navigation state when switching languages

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/           # Locale-specific pages
│   │   ├── layout.tsx      # Locale-aware layout
│   │   └── page.tsx        # Homepage with translations
│   ├── globals.css         # Global styles with RTL/LTR support
│   └── page.tsx           # Root redirect to default locale
├── components/
│   └── LanguageSwitcher.tsx # Language switching component
├── data/
│   └── projects.ts         # Project data with translations
├── i18n/
│   └── request.ts          # i18n configuration
└── messages/
    ├── en.json            # English translations
    └── fa.json            # Persian translations
```

## 🔧 Key Files

### Middleware (`middleware.ts`)
Handles locale detection and routing:
```typescript
import createMiddleware from 'next-intl/middleware';
import {locales} from './src/i18n/request';

export default createMiddleware({
  locales,
  defaultLocale: 'fa',
  localePrefix: 'always'
});
```

### Layout (`src/app/[locale]/layout.tsx`)
- Dynamic font switching based on locale
- RTL/LTR direction setting
- Locale-specific metadata

### Language Switcher (`src/components/LanguageSwitcher.tsx`)
- Client-side component for switching languages
- Maintains current path when switching
- Visual indicator for active language

## 🌐 URLs

- **Root**: `/` → Redirects to `/fa`
- **Persian**: `/fa` (RTL layout, Persian content)
- **English**: `/en` (LTR layout, English content)

## 🎨 Styling Considerations

### RTL/LTR Support
```css
[dir="ltr"] {
  text-align: left;
}

[dir="rtl"] {
  text-align: right;
}

/* Persian font features for RTL */
[dir="rtl"] .faNum {
  --variable-fa-num: 1;
  font-feature-settings: "ss01" var(--variable-fa-num);
}
```

### Font Loading
- **Persian**: Yekan Bakh variable font with Persian numerals
- **English**: Inter font for clean Latin text

## 📱 Mobile Responsiveness

The layout remains fully responsive in both languages:
- Header navigation adapts to RTL/LTR
- Grid layouts work correctly in both directions
- Language switcher is accessible on mobile

## 🔄 Translation Workflow

1. **Add new text**: Update both `/messages/fa.json` and `/messages/en.json`
2. **Use in components**: `const t = useTranslations(); t('key')`
3. **Dynamic content**: Structure data with both languages

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Start development server**:
   ```bash
   pnpm dev
   ```

3. **Visit the application**:
   - Persian: http://localhost:3000/fa
   - English: http://localhost:3000/en

## 🎯 Future Enhancements

- [ ] Add more languages (Arabic, Turkish, etc.)
- [ ] Implement locale-specific date formatting
- [ ] Add language-specific SEO optimizations
- [ ] Implement dynamic content loading
- [ ] Add language detection based on browser preferences

## 📦 Dependencies Added

- `next-intl`: ^4.3.4 - Internationalization library for Next.js

## 🔍 Testing

Test the following scenarios:
1. ✅ Navigate to root URL - should redirect to `/fa`
2. ✅ Switch between languages using the switcher
3. ✅ Verify RTL layout in Persian version
4. ✅ Verify LTR layout in English version
5. ✅ Check that all text is properly translated
6. ✅ Ensure responsive design works in both languages

The implementation provides a solid foundation for a multi-language portfolio website with proper RTL/LTR support and internationalization best practices.
