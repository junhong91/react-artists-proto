import React, { useState, useEffect } from "react";
import WalletPopUpCard from "../components/WalletPopUpCard";
import MetaMaskOnboarding from "@metamask/onboarding";

const Login = () => {
  const [isDisabled, setDisabled] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const walletHeader = { title: "지갑을 선택하세요", icon: "fa-solid fa-chevron-left fa-lg" };
  const walletItems = [
    {
      name: "Meta Mask",
      iconURL: "https://opensea.io/static/images/logos/metamask-fox.svg",
      onClickHandler: handleLoginMetaMask,
      disabled: isDisabled,
    },
  ];
  const [isWalletCardVisible, setWalletCardVisible] = useState(false);

  useEffect(() => {
    setWalletCardVisible(true);
  }, []);

  /**
   * Handle to close wallet pop-up card
   */
  function handleClose() {
    setWalletCardVisible(false);
  }

  function setMetaMaskBtnDisabled(flag) {
    setDisabled(flag);
  }

  /**
   * Check if the MetaMask extension is installed
   * @returns true(installed) or false(not installed)
   */
  function isMetaMaskInstalled() {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  }

  async function connectToMetaMask() {
    try {
      setMetaMaskBtnDisabled(true);
      const { ethereum } = window;
      const newAccounts = await ethereum.request({ method: "eth_requestAccounts" });
      setAccounts(newAccounts);
    } catch (error) {
      console.error(error);
    } finally {
      setMetaMaskBtnDisabled(false);
    }
  }

  /**
   * Handle to login metamask wallet
   * Check if metamask was installed, if not install metamask on your browser.
   * Otherwise, connect to metamask.
   */
  function handleLoginMetaMask() {
    if (!isMetaMaskInstalled()) {
      const forwarderOrigin = "http://localhost:9010";
      const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
      onboarding.startOnboarding();
      // TODO: Need to refresh page!
    } else {
      connectToMetaMask();
    }
    setWalletCardVisible(false);
  }

  return (
    <>
      {isWalletCardVisible && (
        <WalletPopUpCard header={walletHeader} items={walletItems} onClose={handleClose} />
      )}
    </>
  );
};

export default Login;
