import React, { useState } from "react";
import "./index.css";
import ApiResult from "./components/api_result";
import Navigation from './components/navigation';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Define the toggleDarkMode function after setDarkMode
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <div className={`flex justify-center p-2 flex-col items-center h-screen body-font font-mono font-bold ${darkMode ? "dark" : "bg-blue-50"}`}>
      <Navigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <ApiResult  darkMode={darkMode}/>
    </div>
  );
}

export default App;
