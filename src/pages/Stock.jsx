import { useAxiosFunction } from '@/hooks';
import { useScrollFixed } from '@/helpers';
import { Loading } from '@/components';

export const Stock = () => {
  // eslint-disable-next-line
  const [_, error, loading] = useAxiosFunction();

  const fixed = useScrollFixed(60);

  return (
    <div className={`pizzas ${fixed ? 'pizzas-fixed' : ''}`}>
      {error ? (
        <h2 className="error_msg">{JSON.stringify(error)}</h2>
      ) : (
        <>
          {loading ? (
            <Loading visible={true} />
          ) : (
            <>
              <div className="open__soong">
                <h1>Cкоро выйдет...</h1>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
