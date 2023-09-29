import { useState, useContext } from "react";
import { DataContext } from "../../context";

const Lease = () => {
  const [isChecked, setIsChecked] = useState(true);
  const { getSubmitInputValues } = useContext(DataContext);

  const handleRadioChange = (event) => {
    setIsChecked(event.target.value === "noLease");
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
              id="noLease"
              name="lease"
              value="noLease"
              onChange={(e) => (
                handleRadioChange(e), getSubmitInputValues({ lease: "noLease" })
              )}
              defaultChecked
            />
            <label htmlFor="noLease">Без сдачи</label>
          </div>
          <div className="lease__fix">
            <input
              className="input__custom input__lease--default"
              type="radio"
              id="byLease"
              name="lease"
              value="byLease"
              onChange={(e) => handleRadioChange(e)}
            />
            <label htmlFor="byLease">Сдача с</label>
            <div className="lease__ps">
              <input
                type="number"
                className="lease__input"
                placeholder="0"
                disabled={isChecked}
                required
                onChange={(event) =>
                  getSubmitInputValues({ lease: event.target.value })
                }
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
