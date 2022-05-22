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
import { Checkout } from "./Pages/Checkout";
import { AdminLogin } from "./Dashboard/Pages/Login";
import { Dashboard } from "./Dashboard/Pages/Dashboard";
import { AdminLayout } from "./Dashboard/Pages/Layout";

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
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/*" element={<ERROR_404 />} />
            <Route path="/dashboard" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="/adminlogin" element={<AdminLogin />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
