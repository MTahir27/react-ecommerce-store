import { useEffect } from "react";
import "./App.scss";
import WebFont from "webfontloader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Error_404 } from "./Pages/Error_404";
import { Layout } from "./Pages/Layout";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Outfit", "sans-serif"],
      },
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/*" element={<Error_404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
