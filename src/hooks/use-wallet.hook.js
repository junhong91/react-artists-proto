import { useEffect, useState } from "react";

export default function useWallet() {
  const [isWalletCardVisible, setWalletCardVisible] = useState(false);

  useEffect(() => {
    setWalletCardVisible(true);
  }, []);

  const showWalletCard = () => {
    !isWalletCardVisible && setWalletCardVisible(true);
  };

  return {
    isWalletCardVisible,
    showWalletCard,
  };
}
