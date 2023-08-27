import React from "react";

const About = () => {
  return (
    <div className="container about">
      <h3>О вас</h3>
      <form className="about__box">
        <div className="about__input-box">
          <label htmlFor="name">Имя*</label>
          <input
            type="text"
            id="name"
            placeholder="Алексей"
            required
            autoComplete="off"
          />
        </div>
        <div className="about__input-box">
          <label htmlFor="phone">Номер телефона*</label>
          <input
            type="number"
            id="phone"
            placeholder="+998"
            required
            autoComplete="off"
          />
        </div>
        <div className="about__input-box">
          <label htmlFor="email">Почта</label>
          <input
            type="email"
            id="email"
            placeholder="mail@gmail.com"
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default About;
