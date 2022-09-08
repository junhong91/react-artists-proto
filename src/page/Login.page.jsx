import React, { useState, useEffect } from "react";
import WalletPopUpCard from "../components/WalletPopUpCard";
import MetaMaskOnboarding from "@metamask/onboarding";

const Login = () => {
  const walletHeader = { title: "지갑을 선택하세요", icon: "fa-solid fa-chevron-left fa-lg" };
  const walletItems = [
    { name: "Meta Mask", iconURL: "https://opensea.io/static/images/logos/metamask-fox.svg" },
  ];
  const [isWalletCardVisible, setWalletCardVisible] = useState(false);

  /**
   * Handle to close wallet pop-up card
   */
  const handleClose = () => {
    setWalletCardVisible(!isWalletCardVisible);
  };

  /**
   * Check if the MetaMask extension is installed
   * @returns true(installed) or false(not installed)
   */
  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  /**
   * Handle to login metamask wallet
   * 1. Check if metamask was installed, if not install metamask on your browser.
   */
  const handleLoginMetaMask = () => {
    if (!isMetaMaskInstalled()) {
      const forwarderOrigin = "http://localhost:9010";
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
          header={walletHeader}
          items={walletItems}
          onClose={handleClose}
          onHandleLoginMetaMask={handleLoginMetaMask}
        />
      )}
    </>
  );
};

export default Login;
