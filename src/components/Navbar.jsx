import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import WalletPopUpCard from "../components/WalletPopUpCard";
import useMetaMask from "../hooks/use-metamask.hook";
import { useUserProfileContext } from "../providers/UserProfileProvider";
import { NAV_ROUTES } from "../config/routes.config";
import "./Navbar.css";

const Navbar = () => {
  const [isWalletCardVisible, setWalletCardVisible] = useState(false);
  const { isDisabled, handleLoginMetaMask } = useMetaMask();
  const { accounts, setAccounts } = useUserProfileContext();

  useEffect(() => {
    setWalletCardVisible(false);
  }, []);

  const navigate = useNavigate();
  const logoImgURL = `${process.env.PUBLIC_URL}/Byredo_logo_wordmark.png`;
  const signInBtnProps = {
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
      <nav className="navbar__wrapper">
        <img className="navbar__logo" src={logoImgURL} alt="logo" onClick={() => navigate("/")} />
        <ul className="navbar__menu">
          {NAV_ROUTES.map((route) => (
            <li className="navbar__menu__item" key={route.path}>
              <Link to={route.path} key={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
          <button className="navbar__menu__btn" onClick={signInBtnProps.onClick}>
            {signInBtnProps.userProfile.accounts.length === 0
              ? signInBtnProps.btnName
              : signInBtnProps.userProfile.name}
          </button>
        </ul>
      </nav>

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
};

export default Navbar;
