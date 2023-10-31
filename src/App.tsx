import "./App.css";

import { Route, Routes } from "react-router-dom";
import Channel from "./pages/Channel";
import Homepage from "./pages/Homepage";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/channel/:channelId" element={<Channel />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
