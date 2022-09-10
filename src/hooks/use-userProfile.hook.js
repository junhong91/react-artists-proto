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
    if (!isUserRegistered(accounts)) {
      navigate("/registration");
    } else {
      const userProfile = findUserProfileByAccounts(accounts);
      setUsername(userProfile.name);
      setEmail(userProfile.email);
    }
  }, [accounts]);

  function saveUserProfile(userProfile) {
    console.log(userProfile);
  }

  function isUserRegistered(accounts) {
    return Boolean(
      USERS.filter((user) => user.walletAddress === accounts[0]).length !== 0 ? true : false
    );
  }

  function findUserProfileByAccounts(accounts) {
    return USERS.filter((user) => user.walletAddress === accounts[0])[0];
  }

  return {
    accounts,
    email,
    username,
    setAccounts,
    saveUserProfile,
  };
}
