import React from "react";

import "./WalletPopUpCard.css";

const WalletPopUpCard = ({ title, onClose, onHandleLoginMetaMask }) => {
  const metaMaskIcon = "https://opensea.io/static/images/logos/metamask-fox.svg";
  return (
    <>
      <div className="wrapper">
        <div className="dimmed">
          <div className="wallet__card__container" onClick={onClose}>
            <div className="wallet__card__title">
              <h2>{title}</h2>
              <i className="fas fa-arrow-left fa-lg" onClick={onClose}></i>
            </div>
            <ul className="wallet__menu">
              <li className="wallet__menu__item" onClick={onHandleLoginMetaMask}>
                <img alt="" src={metaMaskIcon} />
                <div className="wallet__menu__item__title">Meta Mask</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletPopUpCard;
