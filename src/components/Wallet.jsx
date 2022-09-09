import React from "react";

import WalletCard from "./WalletCard";

const Wallet = ({ header, items, visible, onClose }) => {
  return <>{visible && <WalletCard header={header} items={items} onClose={onClose} />}</>;
};

export default Wallet;
