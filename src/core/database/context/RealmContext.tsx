import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import Realm from 'realm';
import { getRealm } from "../realm";

type RealmProviderProps = {
  children: ReactNode;
};

const RealmContext = createContext<Realm | undefined>(undefined);

export function RealmContextProvider ({ children }: RealmProviderProps) {
  const [realm, setRealm] = useState<Realm | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setRealm(await getRealm());
    })();
  }, []);

  return (
    <RealmContext.Provider value={realm}>{children}</RealmContext.Provider>
  );
};

export const useMainContext = () => useContext(RealmContext);