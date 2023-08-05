import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import Footer from "./components/footer/footer";
import Navbar from "./components/header/Navbar";
import { Home } from "./pages";
import { DataContext } from "./context/context";
import Basket from "./components/main/basket";

const App = () => {
  const { context, showBasket } = useContext(DataContext);

  const exists = context.basket || context.login;
  useEffect(() => {
    if (exists) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible ";
    }
  }, [exists]);

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
      <div
        onClick={() => showBasket(false)}
        className={`${exists ? "blur" : "none"}`}
      ></div>
      <Basket basket={context.basket} showBasket={showBasket} />
    </div>
  );
};

export default App;
