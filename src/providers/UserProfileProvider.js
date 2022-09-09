import { createContext, useContext } from "react";

import useUserProfile from "../hooks/use-userProfile.hook";

const UserProfileContext = createContext();

export default function UserProfileProvider({ children }) {
  const { accounts, email, username, setAccounts, setEmail, setUsername, saveUserProfile } =
    useUserProfile();

  return (
    <UserProfileContext.Provider
      value={{
        accounts,
        email,
        username,
        setAccounts,
        setEmail,
        setUsername,
        saveUserProfile,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfileContext() {
  return useContext(UserProfileContext);
}
