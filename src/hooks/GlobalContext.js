import React, { createContext, useContext, useState, useCallback } from 'react';


const GlobalContext = createContext();

const GlobalProvider = function ({ children }) {
    const [zoacao, setZoacao] = useState('');

    const contextValue = {
     zoacao,
     setZoacao, 
    };
  
    return (
      <GlobalContext.Provider value={contextValue}>
        {children}
      </GlobalContext.Provider>
    );
  };
  
  function useGlobal() {
    const context = useContext(GlobalContext);
  
    if (!context) {
      throw new Error('useGlobal must be used within an GlobalProvider');
    }
  
    return context;
  }
  
  export { GlobalProvider, useGlobal };