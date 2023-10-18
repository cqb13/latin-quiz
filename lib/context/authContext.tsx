"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";
import getSignIn from "@/utils/getSignIn";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({
  children
}: AuthContextProviderProps): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState<boolean | null>(false);

  useEffect(() => {
    getSignIn().then((info) => {
      if (info) {
        setUsername(info.username);
        setPassword(info.password);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        username,
        password,
        signedIn,
        setSignedIn: (status: boolean | null) => {
          setSignedIn(status);
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
