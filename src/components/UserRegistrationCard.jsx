import React from "react";

import "./UserRegistrationCard.css";

const UserRegistrationCard = ({ registration }) => {
  return (
    <div className="registration-card__wrapper">
      <h1 className="registration-card__title">{registration.title}</h1>
      <form className="registration-card__form">
        {registration.items &&
          registration.items.map((item) => (
            <p>
              <label className="registration-card__label">
                {item.name}
                <br />
                <input className="registration-card__input" type="text" />
              </label>
            </p>
          ))}
        <button className="registration-card__sign-up__btn">Sign up</button>
      </form>
    </div>
  );
};

export default UserRegistrationCard;
