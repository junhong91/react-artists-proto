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

  const navbarSignInBtnProps = {
    btnName: "SIGN IN",
    userProfile: {
      name: "JUNHONG LEE",
      accounts: accounts,
    },
    onClick: () => setWalletCardVisible(!isWalletCardVisible),
  };

  async function handleConnectWallet() {
    try {
      const newAccounts = await handleLoginMetaMask();
      setAccounts(newAccounts);
      setWalletCardVisible(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Navbar
        navbarLogo={{ imgURL: `${process.env.PUBLIC_URL}/Byredo_logo_wordmark.png` }}
        navbarSignInBtnProps={navbarSignInBtnProps}
      />
      <CreaOnRoutes routesElem={ROUTES} />
      {isWalletCardVisible && (
        <WalletPopUpCard
          header={{ title: "지갑을 선택하세요", icon: "fa-solid fa-chevron-left fa-lg" }}
          items={[
            {
              name: "Meta Mask",
              iconURL: "https://opensea.io/static/images/logos/metamask-fox.svg",
              onClick: handleConnectWallet,
              disabled: isDisabled,
            },
          ]}
          onClose={() => setWalletCardVisible(false)}
        />
      )}
    </>
  );
}

export default App;
