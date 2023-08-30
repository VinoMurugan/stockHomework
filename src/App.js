import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Nav";
import Home from "./pages/Home";
import StockList from "./pages/StockList";
import StockDetail from "./pages/StockDetail";
import About from "./pages/About";

function App() {
  return (
 
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocks" element={<StockList />} />
          <Route path="/stocks/:symbol" element={<StockDetail />} />
          <Route path="/about"element={<About />} />
        </Routes>
      </div>
  
  );
}

export default App;
