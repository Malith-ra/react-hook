import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UseStateHook from "./features/useState";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UseStateHook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
