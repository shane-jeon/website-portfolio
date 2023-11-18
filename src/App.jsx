import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div className="flex">
        <NavBar />
        <About />
      </div>
    </div>
  );
}
