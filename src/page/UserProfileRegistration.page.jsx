import React from "react";
import { createRef } from "react";

import UserRegistrationCard from "../components/UserRegistrationCard";
import { useUserProfileContext } from "../providers/UserProfileProvider";

const UserProfileRegistration = () => {
  const { saveUserProfile } = useUserProfileContext();

  const formRef = createRef();
  const walletInputRef = createRef();
  const emailInputRef = createRef();
  const usernameInputRef = createRef();

  const REGISTRATION = {
    title: "계정 만들기",
    btnName: "Sign up",
    formRef: formRef,
    items: [
      { name: "Wallet address", inputRef: walletInputRef },
      { name: "Email", inputRef: emailInputRef },
      { name: "Username", inputRef: usernameInputRef },
    ],
  };

  function onSubmit(event) {
    event.preventDefault();
    saveUserProfile({
      walletAddress: walletInputRef.current.value,
      email: emailInputRef.current.value,
      username: usernameInputRef.current.value,
    });
    formRef.current.reset();
  }

  return (
    <div>
      <UserRegistrationCard registration={REGISTRATION} onSubmit={onSubmit} />
    </div>
  );
};

export default UserProfileRegistration;
