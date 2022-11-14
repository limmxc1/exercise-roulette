import React from "react";
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"
import RandomButton from "./components/RandomButton"

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <RandomButton />
      <MainContent />
    </div>
  )
}

