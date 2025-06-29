import { FaBars, FaTimes, FaWallet } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ walletConnected, address, connectWallet }) {
    const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 5;
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <Link to="/">LitDAO</Link>
            </div>

            <div className={`nav-links ${isOpen ? "open" : ""}`} ref={menuRef}>
                <ul>
                    <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>dashboard</Link></li>
                    <li><Link to="/create" onClick={() => setIsOpen(false)}>create proposal</Link></li>
                    <li><Link to="/about" onClick={() => setIsOpen(false)}>about</Link></li>
                </ul>
            </div>

            <div className="navbtn">
                {!walletConnected ? (
                    <button onClick={connectWallet} className="nav-btn">
                        <FaWallet style={{ marginRight: "8px" }} />
                        connect wallet
                    </button>
                ) : (
                    <p>connected: {address?.slice(0, 6)}...{address?.slice(-4)}</p>
                )}
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
        </>
    );
}

export default Navbar;
