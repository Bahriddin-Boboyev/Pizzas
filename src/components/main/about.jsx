import React from "react";
// import { useState } from "react";

const About = ({ value, change }) => {
  return (
    <div className="about">
      <h3>О вас</h3>
      <div className="about__box">
        <div className="about__input-box">
          <label htmlFor="name">Имя*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={value.name}
            placeholder="Алексей"
            required
            autoComplete="off"
            onChange={change}
          />
        </div>
        <div className="about__input-box">
          <label htmlFor="phone">Номер телефона*</label>
          <input
            type="number"
            id="phone"
            placeholder="+998"
            name="number"
            value={value.number}
            required
            autoComplete="off"
            onChange={change}
          />
        </div>
        <div className="about__input-box">
          <label htmlFor="email">Почта*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={value.email}
            placeholder="mail@gmail.com"
            required
            autoComplete="off"
            onChange={change}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
