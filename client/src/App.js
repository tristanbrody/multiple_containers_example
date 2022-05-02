import logo from "./logo.svg";
import "./App.css";
import Fib from "./Fib";
import OtherPage from "./OtherPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* <header>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Fib />} />
          <Route exact path="/otherpage" element={<OtherPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
