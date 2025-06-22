import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import ProposalDetail from "./pages/ProposalDetail";
import CreateProposal from "./pages/CreateProposal";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { useState } from "react";

function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              walletConnected={walletConnected}
              setWalletConnected={setWalletConnected}
              address={address}
              setAddress={setAddress}
            />
          }
        />
        <Route path="/create" element={<CreateProposal />} />
        <Route path="/proposal/:id" element={<ProposalDetail />} />
        <Route
          path="/dashboard"
          element={<Dashboard walletConnected={walletConnected} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
