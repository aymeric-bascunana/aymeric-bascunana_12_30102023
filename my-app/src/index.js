import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// import App from "./App";
import Home from "./components/Home/Home";
import reportWebVitals from "./reportWebVitals";
import Projet1 from "./views/PageProjet1/PageProjet1";
import Projet2 from "./views/PageProjet2/PageProjet2";
// import Panel from "./views/panel/panel";

// import About from "./views/About/About";
// import Footer from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<App />
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ohmyfood" element={<Projet1 />} />
        <Route path="/Printit" element={<Projet2 />} />

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
