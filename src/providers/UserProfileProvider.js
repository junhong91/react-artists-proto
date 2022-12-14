import { createContext, useContext } from "react";

import useUserProfile from "../hooks/use-userProfile.hook";

const UserProfileContext = createContext();

export default function UserProfileProvider({ children }) {
  const { accounts, loggedIn, email, username, setAccounts, saveUserProfile } = useUserProfile();

  return (
    <UserProfileContext.Provider
      value={{
        accounts,
        loggedIn,
        email,
        username,
        setAccounts,
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
