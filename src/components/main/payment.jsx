import React from "react";

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment__box">
        <h2>Оплата</h2>
        <div className="payment__payment-box">
          <div>
            <input
              className="input__custom"
              type="radio"
              id="nalichi"
              name="pay"
              value={"nalichi"}
              defaultChecked
              // checked
            />
            <label htmlFor="nalichi">Наличными</label>
          </div>
          <div>
            <input
              className="input__custom"
              type="radio"
              id="card"
              name="pay"
              value={"card"}
            />
            <label htmlFor="card">По времени</label>
          </div>
          <div>
            <input
              className="input__custom"
              type="radio"
              id="applePay"
              name="pay"
              value={"applePay"}
            />
            <label htmlFor="applePay">По времени</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
