import { useEffect, useState } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";

import ArtistsProvider from "./providers/ArtistsProvider";
import CreaOnRoutes from "./components/Routes.comp";
import { ROUTES } from "./config/routes.config";
import Navbar from "./components/Navbar";
import WalletPopUpCard from "./components/WalletPopUpCard";

function App() {
  const [isDisabled, setDisabled] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [isWalletCardVisible, setWalletCardVisible] = useState(false);

  useEffect(() => {
    setWalletCardVisible(false);
  }, []);

  const navbarLogo = {
    imgURL: `${process.env.PUBLIC_URL}/Byredo_logo_wordmark.png`,
  };
  const signIn = {
    btnName: "SIGN IN",
    userProfile: {
      name: "JUNHONG LEE",
      accounts: accounts,
    },
    onClickHandler: handleSignIn,
  };
  const walletHeader = { title: "지갑을 선택하세요", icon: "fa-solid fa-chevron-left fa-lg" };
  const walletItems = [
    {
      name: "Meta Mask",
      iconURL: "https://opensea.io/static/images/logos/metamask-fox.svg",
      onClickHandler: handleLoginMetaMask,
      disabled: isDisabled,
    },
  ];

  function handleSignIn() {
    setWalletCardVisible(!isWalletCardVisible);
  }
  function handleCloseWallet() {
    setWalletCardVisible(false);
  }
  function disableMetaMaskBtn(flag) {
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
      disableMetaMaskBtn(true);
      const { ethereum } = window;
      return await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.error(error);
    } finally {
      disableMetaMaskBtn(false);
    }
  }

  /**
   * Handle to login metamask wallet
   * Check if metamask was installed, if not install metamask on your browser.
   * Otherwise, connect to metamask.
   */
  async function handleLoginMetaMask() {
    if (!isMetaMaskInstalled()) {
      const forwarderOrigin = "http://localhost:9010";
      const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
      onboarding.startOnboarding();
      window.location.reload();
    } else {
      const newAccounts = await connectToMetaMask();
      setAccounts(newAccounts);
    }
    setWalletCardVisible(false);
  }

  return (
    <ArtistsProvider>
      <Navbar navbarLogo={navbarLogo} signIn={signIn} />
      <CreaOnRoutes routesElem={ROUTES} />
      {isWalletCardVisible && (
        <WalletPopUpCard header={walletHeader} items={walletItems} onClose={handleCloseWallet} />
      )}
    </ArtistsProvider>
  );
}

export default App;
