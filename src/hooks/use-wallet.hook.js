import { useEffect, useState } from "react";

export default function useWallet() {
  const [isWalletCardVisible, setWalletCardVisible] = useState(false);

  useEffect(() => {
    setWalletCardVisible(false);
  }, []);

  return {
    isWalletCardVisible,
    setWalletCardVisible,
  };
}
