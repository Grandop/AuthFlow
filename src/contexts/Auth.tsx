import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authService } from "../services/authService";
import { Alert } from "react-native";
import { convertToString } from "../utils/convertToString";

interface Props {
  children: React.ReactNode;
}

export interface AuthData {
  token: string;
  email: string;
  name: string;
}

export interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);


export const AuthContextProvider = ({children}: Props) => {
  const [authData, setAuth] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      loadFromStorage();
    }, 1000);
  }, [])

  async function loadFromStorage() {
    const auth = await AsyncStorage.getItem('@AuthData');
    if(auth) {
      setAuth(JSON.parse(auth) as AuthData);
    }
    setLoading(false)
  }

  const signIn = async (email: string, password: string): Promise<AuthData> => {
    try {
      const auth = await authService.signIn(email, password);
      setAuth(auth)
      console.log(auth)
      AsyncStorage.setItem('@AuthData', convertToString(auth));
      return auth;

    } catch (error) {
      Alert.alert(error.message, 'tente novamente')
    }
  } 

  const signOut = async (): Promise<void> => {
    setAuth(undefined);
    AsyncStorage.removeItem('@AuthData');
    return;
  } 

  return(
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}