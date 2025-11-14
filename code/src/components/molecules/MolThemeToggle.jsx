import { useState } from 'react';
import AtmButton from '../atoms/AtmButton';
import { useTranslation } from '../../i18n/LanguageContext';
import styled from 'styled-components';

const ThemeButton = styled(AtmButton)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

const LanguageButton = styled(AtmButton)`
  position: fixed;
  top: 20px;
  right: 90px;
  z-index: 1000;
`;

const MolThemeToggle = ({ onThemeChange }) => {
  const [isDark, setIsDark] = useState(true);
  const { t, toggleLanguage, currentLanguage } = useTranslation();

  const handleThemeToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    onThemeChange(newTheme ? 'portfolio' : 'light');
  };

  return (
    <>
      <LanguageButton onClick={toggleLanguage}>
        {currentLanguage === 'fr' ? 'EN' : 'FR'}
      </LanguageButton>
      <ThemeButton onClick={handleThemeToggle}>
        {isDark ? t('lightTheme') : t('darkTheme')}
      </ThemeButton>
    </>
  );
};

export default MolThemeToggle;