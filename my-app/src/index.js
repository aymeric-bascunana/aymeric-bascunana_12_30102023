import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// import App from "./App";
import Home from "./views/Home/Home";
import reportWebVitals from "./reportWebVitals";

// import About from "./views/About/About";
// import Footer from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<App />
  <React.StrictMode>
    <BrowserRouter>
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/Logement/:id" element={<Logement />} /> */}
        {/* <Route path="/About" element={<About />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
