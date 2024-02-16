import './style.scss';
import { ThreeDots } from 'react-loader-spinner';

export const Loading = ({ visible = false, global }) => {
  return (
    <div className={`loading__visible ${global ? 'global-loading' : ''}`}>
      <ThreeDots
        height="150"
        width="150"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ marginTop: '10%' }}
        visible={visible}
      />
    </div>
  );
};
