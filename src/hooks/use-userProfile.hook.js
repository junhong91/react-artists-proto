import { useState } from "react";

export default function useUserProfile() {
  const [accounts, setAccounts] = useState([]);

  return {
    accounts,
    setAccounts,
  };
}
