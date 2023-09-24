import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Loading, Navbar } from "../components";
import { getPing, useAxiosFunction } from "../hooks";
import NetworkErrorRoutes from "./NetworkErrorRoutes";

export const ProtectedRoutes = () => {
  const [data, error, loading, axiosFetch] = useAxiosFunction();

  useEffect(() => {
    getPing(axiosFetch);
  }, []);

  if (loading || error) {
    return loading ? <Loading visible={true} /> : <NetworkErrorRoutes />;
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
