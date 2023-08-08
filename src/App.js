import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weatherservice from "./components/WeatherService";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Weatherservice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
