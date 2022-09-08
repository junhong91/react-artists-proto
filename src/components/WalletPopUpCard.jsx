import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./WalletPopUpCard.css";

const WalletPopUpCard = ({ header, items, onClose, onHandleLoginMetaMask }) => {
  return (
    <>
      <div className="wrapper">
        <div className="dimmed">
          <div className="wallet__container">
            <div className="title">
              <FontAwesomeIcon className="title__icon" icon={header.icon} onClick={onClose} />
              <h2>{header.title}</h2>
            </div>
            <ul className="wallet__menu">
              {items.map((item) => (
                <li className="menu__item" onClick={onHandleLoginMetaMask}>
                  <img className="menu__item__icon" alt={item.name} src={item.iconURL} />
                  <div className="menu__item__name">{item.name}</div>
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
