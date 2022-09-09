import { useEffect, useState } from "react";

import CreaOnRoutes from "./components/Routes.comp";
import { ROUTES } from "./config/routes.config";
import Navbar from "./components/Navbar";
import WalletPopUpCard from "./components/WalletPopUpCard";
import useMetaMask from "./hooks/use-metamask.hook";
import { useUserProfileContext } from "./providers/UserProfileProvider";

function App() {
  const [isWalletCardVisible, setWalletCardVisible] = useState(false);
  const { isDisabled, handleLoginMetaMask } = useMetaMask();
  const { accounts, setAccounts } = useUserProfileContext();

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
      onClickHandler: handleConnectWallet,
      disabled: isDisabled,
    },
  ];

  function handleSignIn() {
    setWalletCardVisible(!isWalletCardVisible);
  }

  function handleCloseWallet() {
    setWalletCardVisible(false);
  }

  async function handleConnectWallet() {
    try {
      const newAccounts = await handleLoginMetaMask();
      setAccounts(newAccounts);
      console.log(newAccounts);
      setWalletCardVisible(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Navbar navbarLogo={navbarLogo} signIn={signIn} />
      <CreaOnRoutes routesElem={ROUTES} />
      {isWalletCardVisible && (
        <WalletPopUpCard header={walletHeader} items={walletItems} onClose={handleCloseWallet} />
      )}
    </>
  );
}

export default App;
