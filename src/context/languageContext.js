import React, { createContext, useContext, useReducer } from 'react';
import cs from "./languages/cs.json";
import en from "./languages/en.json"

const reducerInitialState = {
  data: {...cs},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SWITCH_LANG':
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, dispatchLanguage] = useReducer(reducer, reducerInitialState);

  const switchLanguage = (lang) => {
      dispatchLanguage({
          type: "SWITCH_LANG",
          data: lang ? en : cs,
        });
      };

  return (
    <LanguageContext.Provider
      value={{
        language,
        switchLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
