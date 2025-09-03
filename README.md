# Resume App with Internationalization

A React-based resume application with multi-language support.

## Features

- **Multi-language Support**: English and Thai translations
- **Language Switcher**: Fixed position language toggle buttons
- **Responsive Design**: Works on desktop and mobile devices
- **Print-friendly**: Language switcher hidden when printing

## Available Languages

- **English (en)**: Default language
- **Thai (th)**: Thai translation

## Development

### Install Dependencies
```bash
yarn install
```

### Run Development Server
```bash
yarn dev
```

### Build for Production
```bash
yarn build
```

## Translation System

The app uses `react-i18next` for internationalization:

- Translation files are located in `src/locales/`
- Language detection is automatic based on browser settings
- Language preference is stored in localStorage
- Fallback language is English

### Adding New Languages

1. Create a new translation file in `src/locales/[language].json`
2. Add the language to `src/i18n.js` resources
3. Update the language switcher in `src/components/LanguageSwitcher.jsx`

### Translation Structure

```json
{
  "basicInfo": {
    "name": "Name",
    "bio": "Bio description"
  },
  "profile": {
    "title": "Profile",
    "description": ["Array", "of", "descriptions"]
  }
}
```

## Components

- `LanguageSwitcher`: Fixed position language toggle
- `BasicInfo`: Personal information with translations
- `Profile`: Profile description with translated content
- `Skills`: Technical and language skills
- `Experience`: Work experience with translated titles
- `Education`: Educational background
- `Interests`: Personal interests with translated names