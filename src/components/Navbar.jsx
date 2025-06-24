import { FaBars, FaTimes, FaWallet } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => setIsOpen(!isOpen);
        const closeMenu = () => setIsOpen(false);


        const [walletConnected, setWalletConnected] = useState(false);
        const [address, setAddress] = useState("");
    
        const connectWallet = async () => {
            if (window.ethereum) {
                try {
                    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
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
        <nav className="navbar">
            <div className="logo">
                <Link to="/">LitDAO</Link>
            </div>
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="/dashboard">dashboard</Link></li>
                    <li><Link to="/create">create proposal</Link></li>
                    <li><Link to="/about">about</Link></li>
                </ul>
            </div>
                <div className="navbtn">
                    {!walletConnected ? (
                                    <button onClick={connectWallet} className="nav-btn">
                                        <FaWallet style={{ marginRight: "8px" }} />
                                        connect wallet
                                    </button>
                                ) : (
                                    <p>connected: {address.slice(0, 6)}...{address.slice(-4)}</p>
                                )}
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
}

export default Navbar;
