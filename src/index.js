// localization-toolkit.js

// Define the LocalizationToolkit class
class LocalizationToolkit {
    constructor(defaultLanguage) {
        this.defaultLanguage = defaultLanguage;
        this.languages = {};
    }

    // Function to add language translations
    addLanguage(languageCode, translations) {
        this.languages[languageCode] = translations;
    }

    // Function to translate a string to the specified language
    translate(key, languageCode) {
        // If the language is not specified, use the default language
        languageCode = languageCode || this.defaultLanguage;

        // If the specified language is not available, return the key itself
        if (!this.languages[languageCode]) {
            console.warn(`Translation for language '${languageCode}' not available.`);
            return key;
        }

        // If the translation for the key is not available, return the key itself
        if (!this.languages[languageCode][key]) {
            console.warn(`Translation for key '${key}' not available for language '${languageCode}'.`);
            return key;
        }

        // Return the translated string
        return this.languages[languageCode][key];
    }
}

// Export the LocalizationToolkit class for use in other modules
module.exports = LocalizationToolkit;
