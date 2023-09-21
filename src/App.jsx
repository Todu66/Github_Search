import React, { useState } from "react";
import "./index.css";
import ApiResult from "./components/api_result";
import Navigation from './components/navigation';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Define the toggleDarkMode function after setDarkMode
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className={`flex justify-center flex-col items-center h-screen ${darkMode ? "dark" : ""}`}>
      <Navigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <ApiResult />
    </div>
  );
}

export default App;
