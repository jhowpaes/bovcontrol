import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

interface InternetProvider {
  children: ReactNode;
}

interface InternetContextData {
  isInternetActive: boolean;
}

const InternetContext = createContext({} as InternetContextData);

function InternetProvider({ children }: InternetProvider) {
  const [isInternetActive, setIsInternetActive] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setIsInternetActive((state.isConnected ?? false) && (state.isInternetReachable ?? false));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <InternetContext.Provider value={{ isInternetActive }}>
      {children}
    </InternetContext.Provider>
  );
};

function useInternet(): InternetContextData {
  const context = useContext(InternetContext);

  if (!context) {
    throw new Error('useInternet mist be used within an InternetProvider');
  }


  return context;
}

export { InternetProvider, useInternet };


