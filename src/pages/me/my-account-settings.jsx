import "./style.scss";
import editMeImg from "../../img/edit-me.svg";
import { DataContext } from "../../context";
import { useContext } from "react";

export const MyAccountSettings = () => {
  const { context } = useContext(DataContext);
  const me = context?.types?.meInfo;
  const meInfo = [
    {
      name: "Имя*",
      value: me?.name,
    },
    {
      name: "Номер телефона*",
      value: me?.phone,
    },
    {
      name: "Почта*",
      value: me?.email,
    },
  ];
  return (
    <section className="me-settings">
      <h1>Мой аккаунт</h1>
      <div className="me-settings__cards">
        <div className="me-settings__headers">
          <h4>Личные данные</h4>
          <button>
            <img src={editMeImg} alt="edit" />
            <span>Изменить</span>
          </button>
        </div>
        <ul className="me-settings__body-list">
          {meInfo?.map((item) => (
            <li key={item?.name}>
              <span className="me-settings__name-item">{item.name}</span>
              <span className="me-settings__value-item">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="me-settings__cards cards_2">
        <div className="me-settings__headers">
          <h4>Пароль</h4>
          <button>
            <img src={editMeImg} alt="edit" />
            <span>Изменить</span>
          </button>
        </div>
        <span className="me-settings__body--passwors">{}</span>
      </div>
      <div className="me-settings__cards cards_3">
        <h4>Подписки</h4>
        <div className="input-block">
          <input
            type="checkbox"
            id="settings-checkbox"
            defaultChecked
            className="settings-checkbox"
          />
          <span></span>
          <label htmlFor="settings-checkbox">
            Получать предложения и акции
          </label>
        </div>
      </div>
    </section>
  );
};
