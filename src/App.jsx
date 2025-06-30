import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import ProposalDetail from "./pages/ProposalDetail";
import CreateProposal from "./pages/CreateProposal";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import "./App.css";
import { useState } from "react";

function App() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
        setWalletConnected(true);
      } catch (err) {
        console.error("wallet connection failed", err);
      }
    } else {
      alert("please install MetaMask.");
    }
  };

  return (
    <Router>
      <Navbar 
        walletConnected={walletConnected} 
        address={address}
        connectWallet={connectWallet} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              walletConnected={walletConnected}
              address={address}
              connectWallet={connectWallet}
            />
          }
        />
        <Route path="/create" element={<CreateProposal />} />
        <Route path="/proposal/:id" element={<ProposalDetail />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute walletConnected={walletConnected}>
              <Dashboard walletConnected={walletConnected} />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  );
}

export default App;
