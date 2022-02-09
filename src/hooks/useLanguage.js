import { LANGUAGE } from '../constants/language';
import { LanguageContext } from '../context/languageContext';
import { useContext } from 'react';

const useLanguage = () => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);

  const changeLanguage = () => {
    setCurrentLanguage(LANGUAGE.EN);

  };

  return { currentLanguage, changeLanguage };
};

export default useLanguage;
