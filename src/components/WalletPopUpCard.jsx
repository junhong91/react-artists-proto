import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./WalletPopUpCard.css";

const WalletPopUpCard = ({ title, walletItems, onClose, onHandleLoginMetaMask }) => {
  return (
    <>
      <div className="wrapper">
        <div className="dimmed">
          <div className="wallet__container" onClick={onClose}>
            <div className="wallet__title">
              <FontAwesomeIcon
                className="wallet__title__icon"
                icon="fa-solid fa-chevron-left fa-lg"
                onClick={onClose}
              />
              <h2>{title}</h2>
            </div>
            <ul className="wallet__menu">
              {walletItems.map((item) => (
                <li className="wallet__menu__item" onClick={onHandleLoginMetaMask}>
                  <img className="wallet__menu__item__icon" alt={item.name} src={item.iconURL} />
                  <div className="wallet__menu__item__name">{item.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletPopUpCard;
