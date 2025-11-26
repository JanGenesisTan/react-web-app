import { Route, Routes } from "react-router-dom";
import "./App.css";
import ConcessionList from "./components/ConcessionList.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import PopularList from "./components/PopularList.jsx";
import UpcomingList from "./components/UpcomingList.jsx";

function App() {
  const appName = "PopReact";

  return (
    <>
      <Navbar />

      <header>
        <div className="overlay"></div>

        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-popcorn-flying-from-a-box-with-a-red-background-9217/720p.mp4"
            type="video/mp4"
          ></source>
        </video>

        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">
                Welcome To <br></br> <span className="italic">{appName}</span>
              </h1>
              <p className="lead mb-0"></p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<PopularList />} />
          <Route path="/upcoming" element={<UpcomingList />} />
          <Route path="/concession" element={<ConcessionList />} />
        </Routes>
      </main>

      {/* Footer component */}

      <Footer />
    </>
  );
}

export default App;
