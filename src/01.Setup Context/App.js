import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalProvider/ThemeProvider";

function App() {
  const [theme] = useThemeHook();
  return <main className={theme ? "bg-black" : "bg-light-2"}></main>;
}

export default App;
