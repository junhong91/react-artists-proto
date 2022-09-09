import { createContext, useContext } from "react";

import useUserProfile from "../hooks/use-userProfile.hook";

const UserProfileContext = createContext();

export default function UserProfileProvider({ children }) {
  const { accounts, email, username, saveUserProfile } = useUserProfile();

  return (
    <UserProfileContext.Provider
      value={{
        accounts,
        email,
        username,
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
