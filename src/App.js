import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UseStateHook from "./features/useState";
// import UseEffectHook from "./features/useEffect";
// import UseContext from "./features/useContext";
import React from "react";
import MainComponent from "./components/MainComponent";
import LoginContextProvider from "./components/context/LoginContextProvider";

function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<UseStateHook />} />
    //       <Route path="/useEffect" element={<UseEffectHook />} />
    //       <Route path="/useContext" element={<UseContext />} />
    //     </Routes>
    //   </Router>
    // </div>
    <LoginContextProvider>
      <MainComponent />
    </LoginContextProvider>
  );
}

export default App;
