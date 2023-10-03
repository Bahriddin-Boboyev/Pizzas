import { ErrorMessage } from "@hookform/error-message";
import React from "react";
// import { useState } from "react";

const About = ({ value, change, register, errors }) => {
  return (
    <div className="about">
      <h3>О вас</h3>
      <div className="about__box">
        <div className="about__input-box">
          <label htmlFor="name">Имя*</label>
          <input
            {...register("name", {
              required: "This input is required.",
            })}
            type="text"
            id="name"
            name="name"
            value={value.name}
            placeholder="Алексей"
            autoComplete="off"
            onChange={change}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p className="error-message" key={type}>
                      {message}
                    </p>
                  ))
                : null;
            }}
          />
        </div>
        <div className="about__input-box">
          <label htmlFor="phone">Номер телефона*</label>
          <input
            {...register("number", {
              required: "This input is required.",
              minLength: {
                value: 11,
                message: "This entry must not be less than 11 characters",
              },
              maxLength: {
                value: 11,
                message: "This entry should not exceed 11 characters",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter a number",
              },
            })}
            type="number"
            id="phone"
            placeholder="+998"
            name="number"
            value={value.number}
            autoComplete="off"
            onChange={change}
          />
          <ErrorMessage
            errors={errors}
            name="number"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p className="error-message" key={type}>
                      {message}
                    </p>
                  ))
                : null;
            }}
          />
        </div>
        <div className="about__input-box">
          <label htmlFor="email">Почта*</label>
          <input
            {...register("email", {
              required: "This input is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            type="email"
            id="email"
            name="email"
            value={value.email}
            placeholder="mail@gmail.com"
            autoComplete="off"
            onChange={change}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p className="error-message" key={type}>
                      {message}
                    </p>
                  ))
                : null;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
