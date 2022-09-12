import React from "react";

import "./UserRegistrationCard.css";

const UserRegistrationCard = ({ registration, onSubmit }) => {
  return (
    <div className="registration-card__wrapper">
      <h1 className="registration-card__title">{registration.title}</h1>
      <form className="registration-card__form" ref={registration.formRef} onSubmit={onSubmit}>
        {registration.items &&
          registration.items.map((item) => (
            <p key={item.name}>
              <label className="registration-card__label">
                {item.name}
                <br />
                <input className="registration-card__input" type="text" ref={item.inputRef} />
              </label>
            </p>
          ))}
        <button className="registration-card__sign-up__btn">{registration.btnName}</button>
      </form>
    </div>
  );
};

export default UserRegistrationCard;
