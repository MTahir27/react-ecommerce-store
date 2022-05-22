import { useEffect } from "react";
import "./App.scss";
import WebFont from "webfontloader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home } from "./Pages/Home";
import { Layout } from "./Pages/Layout";
import { SignUp } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { ERROR_404 } from "./Pages/ERROR_404";
import { ForgetPassword } from "./Pages/ForgetPassword";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Outfit", "sans-serif"],
      },
    });
  }, []);

  return (
    <>
      <AuthContextProvider>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/*" element={<ERROR_404 />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
