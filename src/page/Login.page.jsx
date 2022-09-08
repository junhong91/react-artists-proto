import React, { useState, useEffect } from "react";
import WalletPopUpCard from "../components/WalletPopUpCard";
import MetaMaskOnboarding from "@metamask/onboarding";

const forwarderOrigin = "http://localhost:9010";

const Login = () => {
  const walletItems = [
    { name: "Meta Mask", iconURL: "https://opensea.io/static/images/logos/metamask-fox.svg" },
  ];
  const [isWalletCardVisible, setWalletCardVisible] = useState(false);

  const handleClose = () => {
    setWalletCardVisible(!isWalletCardVisible);
  };

  //Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const handleLoginMetaMask = () => {
    if (!isMetaMaskInstalled()) {
      const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
      onboarding.startOnboarding();
    }
  };

  useEffect(() => {
    setWalletCardVisible(true);
  }, []);

  return (
    <>
      {isWalletCardVisible && (
        <WalletPopUpCard
          title="지갑을 선택하세요"
          walletItems={walletItems}
          onClose={handleClose}
          onHandleLoginMetaMask={handleLoginMetaMask}
        />
      )}
    </>
  );
};

export default Login;
