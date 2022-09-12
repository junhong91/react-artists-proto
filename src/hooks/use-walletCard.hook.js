import { useEffect, useState } from "react";

export default function useWalletCard() {
  const [isWalletCardVisible, setWalletCardVisible] = useState(false);

  useEffect(() => {
    setWalletCardVisible(false);
  }, []);

  return {
    isWalletCardVisible,
    setWalletCardVisible,
  };
}
