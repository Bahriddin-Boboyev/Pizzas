import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/header/Navbar";
import { Home } from "./pages";
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
