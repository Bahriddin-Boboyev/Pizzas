import React, { useState } from "react";

const Lease = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleRadioChange = (event) => {
    setIsChecked(event.target.value === "bezlease");
  };

  return (
    <div className="lease">
      <div className="lease__box">
        <h2>Сдача</h2>
        <div className="lease__lease-box">
          <div>
            <input
              className="input__custom"
              type="radio"
              id="bezlease"
              name="lease"
              value="bezlease"
              onChange={handleRadioChange}
              defaultChecked
            />
            <label htmlFor="bezlease">Без сдачи</label>
          </div>
          <div className="lease__fix">
            <input
              className="input__custom input__lease--default"
              type="radio"
              id="byLease"
              name="lease"
              value="byLease"
              onChange={handleRadioChange}
            />
            <label htmlFor="byLease">Сдача с</label>
            <div className="lease__ps">
              <input
                type="number"
                className="lease__input"
                placeholder="0"
                disabled={isChecked}
                required
              />
              <span>₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lease;
