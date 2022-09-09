import { useState } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";

export default function useMetaMask() {
  const [isDisabled, setDisabled] = useState(false);

  /**
   * Check if the MetaMask extension is installed
   * @returns true(installed) or false(not installed)
   */
  function isMetaMaskInstalled() {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  }

  /**
   * Get ethereum accounts
   * @returns eth accounts
   */
  async function getEthAccounts() {
    try {
      setDisabled(true);
      const { ethereum } = window;
      return await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.error(error);
    } finally {
      setDisabled(false);
    }
  }

  /**
   * Handle to login metamask wallet
   * Check if metamask was installed, if not install metamask on your browser.
   * Otherwise, return eth wallet accounts
   * @returns eth wallet accounts if success
   */
  async function handleLoginMetaMask() {
    if (!isMetaMaskInstalled()) {
      const forwarderOrigin = "http://localhost:9010";
      const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
      onboarding.startOnboarding();
      window.location.reload();
    } else {
      const newAccounts = await getEthAccounts();
      console.log(`new accounts: ${newAccounts}`);
      return newAccounts;
    }
  }

  return {
    isDisabled,
    handleLoginMetaMask,
  };
}
