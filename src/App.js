import "./Trippy/styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Trippy/routes/Home";
import About from "./Trippy/routes/About";
import Service from "./Trippy/routes/Service";
import Contact from "./Trippy/routes/Contact";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
