import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseStateHook from "./features/useState";
import UseEffectHook from "./features/useEffect";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UseStateHook />} />
          <Route path="/useEffect" element={<UseEffectHook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
