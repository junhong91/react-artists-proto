import MetaMaskOnboarding from "@metamask/onboarding";

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
 * Otherwise, connect to metamask.
 */
export function handleLoginMetaMask() {
  if (!isMetaMaskInstalled()) {
    const forwarderOrigin = "http://localhost:9010";
    const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
    onboarding.startOnboarding();
  } else {
    const newAccounts = await connectToMetaMask();
    setAccounts(newAccounts);
  }
}