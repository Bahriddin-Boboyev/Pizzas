import "./style.scss";
import Skeleton from "react-loading-skeleton";

export const MainSkeleton = () => {
  return (
    <div className="main-skeleton">
      <Skeleton className="main-skeleton__image" />
      <Skeleton className="main-skeleton__title" />
      <Skeleton className="main-skeleton__desc" count={3} />
      <div className="main-skeleton__box">
        <Skeleton className="main-skeleton__btn" />
        <Skeleton className="main-skeleton__price" />
      </div>
    </div>
  );
};
