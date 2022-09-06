import React from "react";

import "./WalletPopUpCard.css";

const WalletPopUpCard = ({ onPopUp, onHandleLoginMetaMask }) => {
  const metaMaskIcon = "https://opensea.io/static/images/logos/metamask-fox.svg";
  return (
    <>
      <div className="wrapper">
        <div className="dimmed">
          <div className="wallet__card__container" onClick={onPopUp}>
            <div className="wallet__card__title">
              <h2>지갑을 선택하세요</h2>
              <i className="fas fa-arrow-left fa-lg" onClick={onPopUp}></i>
            </div>
            <ul className="wallet__menu">
              <li className="wallet__item" onClick={onHandleLoginMetaMask}>
                <img height="30px" alt="" src={metaMaskIcon} />
                <div className="wallet__item__title">Meta Mask</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletPopUpCard;
