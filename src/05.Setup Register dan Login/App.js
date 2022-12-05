import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalProvider/ThemeProvider";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { Router } from "@reach/router";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";

function App() {
  const [theme] = useThemeHook();
  return (
    <main
      className={theme ? "bg-black" : "bg-light-2"}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <Header />
      <Router>
        <Home path="/" />
        <SignIn path="/sign-in" />
        <Register path="/register" />
        <ProductDetails path="product-details/:productId" />
        <Cart path="/cart" />
      </Router>
    </main>
  );
}

export default App;
