import React, { useState } from "react";
import WalletPopUpCard from "../components/WalletPopUpCard";
import MetaMaskOnboarding from "@metamask/onboarding";

const forwarderOrigin = "http://localhost:9010";

const Login = () => {
  const [isPopupVisible, setPopUpVisible] = useState(false);

  const handlePopUp = () => {
    setPopUpVisible(!isPopupVisible);
  };

  //Created check function to see if the MetaMask extension is installed
  const _isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const handleLoginMetaMask = () => {
    //Now we check to see if Metmask is installed
    if (!_isMetaMaskInstalled()) {
      console.log("Is not installed");
      //We create a new MetaMask onboarding object to use in our app
      const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
      //On this object we have startOnboarding which will start the onboarding process for our end user
      onboarding.startOnboarding();
    }
  };

  // useEffect(() => {
  // }, []);

  return (
    <>{<WalletPopUpCard onPopUp={handlePopUp} onHandleLoginMetaMask={handleLoginMetaMask} />}</>
  );
};

export default Login;
