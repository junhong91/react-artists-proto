import { useEffect, useState } from "react";

export default function useUserProfile() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if (accounts.length === 0) return;

    console.log("account updated!");
  }, [accounts]);

  function saveUserProfile(userProfile) {
    console.log(userProfile);
  }

  return {
    accounts,
    email,
    username,
    setAccounts,
    setEmail,
    setUsername,
    saveUserProfile,
  };
}
