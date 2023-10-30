import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Loading, Navbar } from "../components";
import { IsLoggedInUser, getPing } from "../helpers";
import { useAxiosFunction } from "../hooks";
import { SomethingWrong } from "./SomethingWrong";

export const ProtectedRoutes = () => {
  const [data, error, loading, axiosFetch] = useAxiosFunction();

  useEffect(() => {
    getPing(axiosFetch);
  }, []);

  // check login user
  IsLoggedInUser();

  if (loading || error) {
    return loading ? <Loading visible={true} /> : <SomethingWrong />;
  }

  if (data?.data === "Pong!") {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }
};
