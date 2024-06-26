import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// import App from "./App";
import Home from "./views/Home/Home";
import reportWebVitals from "./reportWebVitals";
import Ohmyfood from "./views/Projets/Ohmyfood/Projet_ohmyfood";
import Printit from "./views/Projets/Printit/Projet_printit";

// import Panel from "./views/panel/panel";

// import About from "./views/About/About";
// import Footer from "./components/footer/footer";
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/React-app-projet12" element={<Home />} />
        <Route
          path="React-app-projet12/Projet/Ohmyfood"
          element={<Ohmyfood theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="React-app-projet12/Projet/Printit"
          element={<Printit theme={theme} toggleTheme={toggleTheme} />}
        />

        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
