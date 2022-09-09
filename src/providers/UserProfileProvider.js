import { createContext, useContext } from "react";

import useUserProfile from "../hooks/use-userProfile.hook";

const UserProfileContext = createContext();

export default function UserProfileProvider({ children }) {
  const { accounts, setAccounts } = useUserProfile();

  return (
    <UserProfileContext.Provider
      value={{
        accounts,
        setAccounts,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfileContext() {
  return useContext(UserProfileContext);
}
