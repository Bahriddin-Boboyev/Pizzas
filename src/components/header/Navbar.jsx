import './header.scss';
import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '@/context';
import { Login, Register, TimerComponent } from '../';
import { useScrollFixed, storeTotalCost, storeTotalCount } from '@/helpers';
import useLocalStorageState from 'use-local-storage-state';
import { ReactSVG } from 'react-svg';
import { Icons } from '@/img';

export const Navbar = () => {
  const { context, showBasket, showModal } = useContext(DataContext);
  const [toggle, setToggle] = useState(false);
  const [cart] = useLocalStorageState('cart', []);
  const navigate = useNavigate();

  const fixed = useScrollFixed(50);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [toggle]);

  return (
    <nav className="navbar navbar-1">
      <div className="navbar__main container">
        <div className="navbar__section-1">
          <div className="navbar__section_1_block">
            <div className="navbar__img_block">
              <img src={Icons.locationIcon} alt="location" />
            </div>
            <select name="city" id="city">
              <option className="options" value="moscow" defaultValue={'moscow'}>
                Москва
              </option>
              s
              <option className="options" value="tomsk">
                Томск
              </option>
              <option className="options" value="kazan">
                Казань
              </option>
            </select>
          </div>
          <div className="navbar__item navbar__item--locations">
            <Link to={'#'}>Проверить адрес</Link>
          </div>
          <div className="navbar__item">
            <Link to={'#'}>
              Среднее время доставки*: <TimerComponent time={35} repeat={true} />
            </Link>
          </div>
        </div>
        <div className="navbar__section-2">
          <div className="navbar__item-2 navbar__item-2--work">
            <p>Время работы: с 11:00 до 23:00</p>
          </div>
          <div className="navbar__section-2-login">
            {context?.types?.isLoggedIn ? (
              <div className="user-navbar" onClick={() => navigate('/settings')}>
                <ReactSVG
                  className="user-avatar"
                  src={Icons.userAvatar}
                  beforeInjection={(svg) => {
                    svg.setAttribute('style', 'width: 30px');
                  }}
                />
                <span>{context?.types?.meInfo?.name}</span>
              </div>
            ) : (
              <button
                style={{ display: 'flex', alignItems: 'center' }}
                onClick={() => showModal({ hidden: true, type: 'register' })}
              >
                <ReactSVG
                  style={{ marginTop: '-5px', marginRight: '5px' }}
                  src={Icons.userAccount}
                  beforeInjection={(svg) => {
                    svg.setAttribute('style', 'width: 15px');
                  }}
                />
                Войти в аккаунт
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="navbar__line container"></div>
      <div className={`container ${fixed ? 'fixed-helper' : ''}`}></div>
      <div className={`navbar__down ${fixed ? 'fixed' : ''}`}>
        <div className="navbar__wrapper">
          <Link to={'/'} className="navbar__down-img-block" onClick={() => setToggle(false)}>
            <ReactSVG src={Icons.logoText} />
            <ReactSVG src={Icons.logo} />
          </Link>
          <div className={`navbar__down__category  ${!fixed ? 'none' : ''}`}>
            <Link className="hover__text" to="/menu/fire">
              Акции
            </Link>
            <Link className="hover__text" to="/menu/pizzas">
              Пицца
            </Link>
            <Link className="hover__text" to="/menu/sushi">
              Суши
            </Link>
            <Link className="hover__text" to="/menu/drink">
              Напитки
            </Link>
            <Link className="hover__text" to="/menu/snacks">
              Закуски
            </Link>
            <Link className="hover__text" to="/menu/combo">
              Комбо
            </Link>
            <Link className="hover__text" to="/menu/desserts">
              Десерты
            </Link>
            <Link className="hover__text" to="/menu/sauce">
              Соусы
            </Link>
          </div>
          <div className="navbar__down-korzinka-block">
            <button onClick={() => showBasket(true)}>
              <img src={Icons.korzinka} alt="korzinka" />
              <span>{storeTotalCost(cart)} ₽</span>
            </button>
          </div>
          <div className={`menu menu_btn ${toggle ? 'open' : ''}`} onClick={() => setToggle((prev) => !prev)}>
            <div className="icon-E"></div>
            <div className="icon-X"></div>
          </div>
        </div>
      </div>
      <Register />
      <Login />
      <div className="navbar__basket-shop--box hover">
        <span className="animate-ping"></span>
        <button onClick={() => showBasket(true)}>
          <img src={Icons.korzinka2} alt="korzinka 2" />
          <span>{storeTotalCount(cart)}</span>
        </button>
      </div>
      <div className={`mobile__menu container ${toggle ? 'transform' : ''} ${fixed ? 'nav__scroll-top' : ''}`}>
        <div
          className={`login__block hover`}
          onClick={() => {
            setToggle(false);
            context?.types?.isLoggedIn ? navigate('/settings') : showModal({ hidden: true, type: 'register' });
          }}
        >
          <div className={`login__inner-block ${toggle ? 'transform-important' : ''}`}>
            <div>
              {context?.types?.isLoggedIn ? (
                <ReactSVG
                  className="user-avatar"
                  src={Icons.userAvatar}
                  beforeInjection={(svg) => {
                    svg.setAttribute('style', 'width: 30px');
                  }}
                />
              ) : (
                <ReactSVG src={Icons.login} alt="login svg" />
              )}
            </div>
            <h3>{context?.types?.isLoggedIn ? context?.types?.meInfo?.name : 'Войти в аккаунт'}</h3>
          </div>
        </div>
        <div className="line"></div>
        <div className={`mobile__menu--box ${toggle ? 'transform' : ''}`}>
          <Link className={`nav__links hover`} to="/menu/fire" onClick={() => setToggle(false)}>
            Акции
          </Link>
          <Link className={`nav__links hover`} to="/menu/pizzas" onClick={() => setToggle(false)}>
            Пицца
          </Link>
          <Link className={`nav__links hover`} to="/menu/sushi" onClick={() => setToggle(false)}>
            Суши
          </Link>
          <Link className={`nav__links hover`} to="/menu/drink" onClick={() => setToggle(false)}>
            Напитки
          </Link>
          <Link className={`nav__links hover`} to="/menu/snacks" onClick={() => setToggle(false)}>
            Закуски
          </Link>
          <Link className={`nav__links hover`} to="/menu/combo" onClick={() => setToggle(false)}>
            Комбо
          </Link>
          <Link className={`nav__links hover`} to="/menu/desserts" onClick={() => setToggle(false)}>
            Десерты
          </Link>
          <Link className={`nav__links hover`} to="/menu/sauce" onClick={() => setToggle(false)}>
            Соусы
          </Link>
        </div>
      </div>
    </nav>
  );
};
