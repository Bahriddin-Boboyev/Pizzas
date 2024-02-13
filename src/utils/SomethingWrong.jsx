import './style.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icons } from '@/img';

export const SomethingWrong = () => {
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <article className="something-wrong">
        <img src={Icons.somethingWrongImg} alt="img" />
        <h1>Oops, Something went wrong...</h1>
        <button
          className="btn"
          // eslint-disable-next-line no-sequences
          onClick={() => (setReload(!reload), navigate('/'))}
        >
          <i className={`fa-solid fa-rotate-right ${reload ? 'rotate-icon' : ''}`}></i>
        </button>
      </article>
    </>
  );
};
