import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import Footer from "./components/footer/footer";
import Navbar from "./components/header/Navbar";
import { Home } from "./pages";
import { DataContext } from "./context/context";
import Basket from "./components/main/basket";

const App = () => {
  const { context, showBasket } = useContext(DataContext);

  useEffect(() => {
    if (context.basket) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible ";
    }
  }, [context.basket]);

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
        className={`${context.basket ? "blur" : "none"}`}
      ></div>
      <Basket basket={context.basket} showBasket={showBasket} />
    </div>
  );
};

export default App;
