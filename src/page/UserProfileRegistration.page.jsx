import React from "react";
import UserRegistrationCard from "../components/UserRegistrationCard";

const UserProfileRegistration = () => {
  const REGISTRATION = {
    title: "계정 만들기",
    items: [{ name: "Wallet address" }, { name: "Email" }, { name: "Username" }],
  };

  return (
    <div>
      <UserRegistrationCard registration={REGISTRATION} />
    </div>
  );
};

export default UserProfileRegistration;
