import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Home from "./components/Home";
import Add from "./components/Add";

function App() {
  return (
    <div className="App">
      {/* <Create/> */}
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
