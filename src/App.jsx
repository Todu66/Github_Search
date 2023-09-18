import React from "react"
import "./index.css"
import ApiResult from "./components/api_result"
import Navigation from "./components/navigation"
// #F6F8FF
function App() {

  return (
    <div className="flex flex-col  items-center  h-screen gap-2 justify-start w-11/12 my-0 mx-auto">
      <Navigation />
      <ApiResult />
      
    
    </div>
  )
}

export default App
