import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// import App from "./App";
import Home from "./views/Home/Home";
import reportWebVitals from "./reportWebVitals";
import Projet1 from "./components/PageProjet1/PageProjet1";
import Projet2 from "./components/PageProjet2/PageProjet2";

// import About from "./views/About/About";
// import Footer from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<App />
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageProjet1" element={<Projet1 />} />
        <Route path="/PageProjet2" element={<Projet2 />} />
        {/* <Route path="/Logement/:id" element={<Logement />} /> */}
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
