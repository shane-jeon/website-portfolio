import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skill";
import Interests from "./components/Interest";
import Awards from "./components/Awards";

export default function App() {
  return (
    <div>
      <div className="flex flex-col">
        <NavBar />
        <div className="">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Interests />
          <Awards />
        </div>
      </div>
    </div>
  );
}
