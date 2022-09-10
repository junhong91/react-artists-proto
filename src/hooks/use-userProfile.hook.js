import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { USERS } from "../config/database.config";

export default function useUserProfile() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if (accounts.length === 0) return;

    console.log("account updated!");
    console.log(findUserByAccounts(accounts));
  }, [accounts]);

  function saveUserProfile(userProfile) {
    console.log(userProfile);
  }

  function findUserByAccounts(accounts) {
    console.log(accounts);
    return USERS.filter((user) => user.walletAddress === accounts[0]);
  }

  return {
    accounts,
    email,
    username,
    setAccounts,
    saveUserProfile,
  };
}
