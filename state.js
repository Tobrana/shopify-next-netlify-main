import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cartId, setCartId] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  return (
    <AppContext.Provider value={{ cartId, setCartId, cartCount, setCartCount }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
