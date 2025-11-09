import React, { createContext, useContext, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  };

  const t = (key) => {
    const translation = getNestedValue(translations, key);
    
    // Si la traduction n'existe pas, retourner la clé
    if (!translation) {
      return key;
    }
    
    // Si c'est un objet avec des tableaux par langue (comme skills)
    if (translation && typeof translation === 'object' && !Array.isArray(translation)) {
      // Si c'est un tableau dans la langue actuelle
      if (Array.isArray(translation[currentLanguage])) {
        return translation[currentLanguage];
      }
      // Si c'est une string dans la langue actuelle
      if (typeof translation[currentLanguage] === 'string') {
        return translation[currentLanguage];
      }
    }
    
    return key; // Fallback to key if translation not found
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};