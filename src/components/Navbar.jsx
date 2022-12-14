import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Wallet from "./Wallet";
import useWalletCard from "../hooks/use-walletCard.hook";
import useMetaMask from "../hooks/use-metamask.hook";
import { useUserProfileContext } from "../providers/UserProfileProvider";
import { NAV_ROUTES } from "../config/routes.config";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // TODO: Move to custom react hook
  let isUserProfileVisible = false;
  const { isWalletCardVisible, setWalletCardVisible } = useWalletCard();
  const { accounts, loggedIn, username, setAccounts } = useUserProfileContext();
  const { isMetaMaskBtnDisabled, handleLoginMetaMask } = useMetaMask();

  const CREAON_LOGO = `${process.env.PUBLIC_URL}/Byredo_logo_wordmark.png`;
  const DEFAULT_USER_LOGO = `${process.env.PUBLIC_URL}/default_user_profile.png`;
  const userProfile = document.querySelector(".navbar__user-profile");

  const SIGNINPROPS = {
    btnName: "SIGN IN",
    userProfile: {
      name: username,
      accounts: accounts,
    },
    onClick: () => setWalletCardVisible(!isWalletCardVisible),
  };

  function onClickUserProfile() {
    // TODO: Move to components
    isUserProfileVisible = !isUserProfileVisible;
    if (isUserProfileVisible) {
      userProfile.classList.add("open");
      userProfile.classList.remove("closed");
    } else {
      userProfile.classList.add("closed");
      userProfile.classList.remove("open");
    }
  }

  async function handleLogin() {
    try {
      const newAccounts = await handleLoginMetaMask();
      // When set accounts, user profile will be set.
      setAccounts(newAccounts);
      setWalletCardVisible(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <nav className="navbar__wrapper">
        <button className="navbar__logo">
          <img src={CREAON_LOGO} height="28px" alt="logo" onClick={() => navigate("/")} />
        </button>
        <ul className="navbar__menu">
          {NAV_ROUTES &&
            NAV_ROUTES.map((route) => (
              <li className="navbar__menu__item" key={route.path}>
                <Link to={route.path} key={route.path}>
                  {route.name}
                </Link>
              </li>
            ))}

          {!loggedIn && (
            <button className="navbar__menu__btn" onClick={SIGNINPROPS.onClick}>
              {SIGNINPROPS.btnName}
            </button>
          )}
          {loggedIn && (
            <button className="navbar__menu__btn" onClick={onClickUserProfile}>
              <img src={DEFAULT_USER_LOGO} height="28px" alt="" />
              {SIGNINPROPS.userProfile.name}
            </button>
          )}
        </ul>
      </nav>
      <Wallet
        header={{ title: "????????? ???????????????", icon: "fa-solid fa-chevron-left fa-lg" }}
        items={[
          {
            name: "Meta Mask",
            iconURL: "https://opensea.io/static/images/logos/metamask-fox.svg",
            disabled: isMetaMaskBtnDisabled,
            onClick: handleLogin,
          },
        ]}
        visible={isWalletCardVisible}
        onClose={() => setWalletCardVisible(false)}
      />
      <aside className="navbar__user-profile closed">
        <div className="user-profile__sidebar__wrapper">
          <button>Sign out</button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
