import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import Footer from "./components/footer/footer";
import Navbar from "./components/header/Navbar";
import {
  Combo,
  Desserts,
  Drink,
  Home,
  Pizzas,
  Sauce,
  Snacks,
  Sushi,
} from "./pages";
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
          <Route path="/menu/pizzas" element={<Pizzas />} />
          <Route path="/menu/sushi" element={<Sushi />} />
          <Route path="/menu/drink" element={<Drink />} />
          <Route path="/menu/snacks" element={<Snacks />} />
          <Route path="/menu/combo" element={<Combo />} />
          <Route path="/menu/desserts" element={<Desserts />} />
          <Route path="/menu/sauce" element={<Sauce />} />
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
