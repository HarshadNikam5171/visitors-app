import { HashRouter, Routes, Route, Link } from "react-router-dom";
import VisitorPage from "./Pages/VisitorPage";
import EventPage from "./Pages/EventPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <HashRouter>
      <div className="container mt-5 ">
        <h1 className="mb-4 text-center">Visitor Book</h1>

        <nav className="mb-4 d-flex justify-content-center gap-3">
          <Link className="btn btn-primary" to="/">
            Visitor
          </Link>
          <Link className="btn btn-success" to="/events">
            Events
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<VisitorPage />} />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
