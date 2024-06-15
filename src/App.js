import "./App.css";
import Header from "./Components/Header";
import About from "./Pages/About";
import Home from "./Pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
