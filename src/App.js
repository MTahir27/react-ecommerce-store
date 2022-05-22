import { useEffect } from "react";
import "./App.scss";
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Outfit", "sans-serif"],
      },
    });
  }, []);
  return <h1>Hello</h1>;
}

export default App;
