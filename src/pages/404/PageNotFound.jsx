import "./style.scss";

export const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <div className="pageNotFound__box">
        <h1 className="pageNotFound__title">
          4
          <span>
            <i className="fas fa-ghost"></i>
          </span>
          4
        </h1>
        <h2 className="pageNotFound__title--second">
          Error: 404 page not found
        </h2>
        <p className="pageNotFound__text">
          Sorry, the page you&apos;re looking for cannot be accessed
        </p>
      </div>
    </div>
  );
};
