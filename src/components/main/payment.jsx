import { useContext } from 'react';
import { DataContext } from '@/context';

const Payment = () => {
  const { getSubmitInputValues } = useContext(DataContext);

  return (
    <div className="payment">
      <div className="payment__box">
        <h2>Оплата</h2>
        <div className="payment__payment-box">
          <div>
            <input
              className="input__custom"
              type="radio"
              id="cash"
              name="pay"
              value="cash"
              defaultChecked
              onChange={() => getSubmitInputValues({ pay: 'cash' })}
            />
            <label htmlFor="cash">Наличными</label>
          </div>
          <div>
            <input
              className="input__custom"
              type="radio"
              id="card"
              name="pay"
              value="card"
              onChange={() => getSubmitInputValues({ pay: 'card' })}
            />
            <label htmlFor="card">Картой</label>
          </div>
          <div>
            <input
              className="input__custom"
              type="radio"
              id="applePay"
              name="pay"
              value="applePay"
              onChange={() => getSubmitInputValues({ pay: 'applePay' })}
            />
            <label htmlFor="applePay">Apple Pay</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
