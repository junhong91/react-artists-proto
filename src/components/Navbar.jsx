import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Wallet from "./Wallet";
import useWallet from "../hooks/use-wallet.hook";
import useMetaMask from "../hooks/use-metamask.hook";
import { useUserProfileContext } from "../providers/UserProfileProvider";
import { NAV_ROUTES } from "../config/routes.config";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { isWalletCardVisible, setWalletCardVisible } = useWallet();
  const { accounts, setAccounts } = useUserProfileContext();
  const { isDisabled, handleLoginMetaMask } = useMetaMask();

  const LOGO = `${process.env.PUBLIC_URL}/Byredo_logo_wordmark.png`;
  const SIGNINPROPS = {
    btnName: "SIGN IN",
    userProfile: {
      name: "JUNHONG LEE",
      accounts: accounts,
    },
    onClick: () => setWalletCardVisible(!isWalletCardVisible),
  };

  async function handleLogin() {
    try {
      const newAccounts = await handleLoginMetaMask();
      setAccounts(newAccounts);
      setWalletCardVisible(false);
      // Get username / email from database
      // if not exists, register [username/email]
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <nav className="navbar__wrapper">
        <img className="navbar__logo" src={LOGO} alt="logo" onClick={() => navigate("/")} />
        <ul className="navbar__menu">
          {NAV_ROUTES &&
            NAV_ROUTES.map((route) => (
              <li className="navbar__menu__item" key={route.path}>
                <Link to={route.path} key={route.path}>
                  {route.name}
                </Link>
              </li>
            ))}
          <button className="navbar__menu__btn" onClick={SIGNINPROPS.onClick}>
            {SIGNINPROPS.userProfile.accounts.length === 0
              ? SIGNINPROPS.btnName
              : SIGNINPROPS.userProfile.name}
          </button>
        </ul>
      </nav>
      <Wallet
        header={{ title: "지갑을 선택하세요", icon: "fa-solid fa-chevron-left fa-lg" }}
        items={[
          {
            name: "Meta Mask",
            iconURL: "https://opensea.io/static/images/logos/metamask-fox.svg",
            onClick: handleLogin,
            disabled: isDisabled,
          },
        ]}
        visible={isWalletCardVisible}
        onClose={() => setWalletCardVisible(false)}
      />
    </>
  );
};

export default Navbar;
