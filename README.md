# Localization Toolkit

This Localization Toolkit package provides a basic toolkit for adding multi-language support to JavaScript applications. It includes functionalities for adding language translations and translating strings.

## Installation

You can install the Localization Toolkit package via npm:

```bash
npm install localization-toolkit
```

## Usage

Import the `LocalizationToolkit` class into your JavaScript code:

```javascript
const LocalizationToolkit = require('localization-toolkit');
```

### Creating a LocalizationToolkit Instance

To create a new instance of the LocalizationToolkit, instantiate the `LocalizationToolkit` class with a default language:

```javascript
const localization = new LocalizationToolkit('en'); // Default language is English ('en')
```

### Adding Language Translations

To add language translations, use the `addLanguage` method:

```javascript
localization.addLanguage('en', {
    greeting: 'Hello',
    goodbye: 'Goodbye'
});

localization.addLanguage('fr', {
    greeting: 'Bonjour',
    goodbye: 'Au revoir'
});
```

### Translating Strings

To translate a string to a specific language, use the `translate` method:

```javascript
console.log(localization.translate('greeting', 'en')); // Output: 'Hello'
console.log(localization.translate('goodbye', 'fr')); // Output: 'Au revoir'
```

If the specified language is not available or the translation for the key is missing, the toolkit will log a warning and return the key itself.

## License

This Localization Toolkit package is licensed under the [MIT License](LICENSE).
