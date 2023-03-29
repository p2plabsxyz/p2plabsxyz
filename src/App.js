import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route>
            <Route path="/" exact element={<LandingPage/>} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
