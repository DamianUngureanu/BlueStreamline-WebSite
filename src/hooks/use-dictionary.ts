import { useState } from 'react';
import { DictionaryRO } from '../dictionary/ro';
import { DictionaryEN } from '../dictionary/en';

type Dictionaries = typeof DictionaryRO | typeof DictionaryEN;

interface UseDictionaryReturnType {
  dictionary: Dictionaries;
  setLanguage: (language: 'ro' | 'en') => void;
}

const useDictionary = (): UseDictionaryReturnType => {

  const [language, setLanguage] = useState<'ro' | 'en'>();

  const dictionary = language === 'ro' ? DictionaryRO : DictionaryEN;

  return {
    dictionary,
    setLanguage
  };
};

export default useDictionary;