// src/pages/About.jsx
import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();

    const contributors = [
        { name: "Katrina Dawap", role: "Founder & Creative Lead", contact: "08108571334", instagram: "@kaaahtea" },
        { name: "Katrina Dawap", role: "Founder & Creative Lead", contact: "08108571334", instagram: "@kaaahtea" },
        { name: "Katrina Dawap", role: "Founder & Creative Lead", contact: "08108571334", instagram: "@kaaahtea" },
    ];

    return (
        <div className="about-page">
            <h1>About LitDAO</h1>
            <img src="/assets/groovy.png" className="about-image"/>
            <p>
                LitDAO is a community-driven platform for funding literary projects and cultural
                initiatives using decentralized governance. We're building a future where decisions
                about supporting the literary arts are made by readers, writers, and the public—together.
            </p>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    To empower creatives and communities to shape the literary ecosystem through
                    accessible funding and transparent decision-making.
                </p>
            </section>

            <section className="vision">
                <h2>Our Vision</h2>
                <p>
                    A decentralized cultural future where literature thrives independently of centralized institutions.
                </p>
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <ol>
                    <li>Connect your wallet</li>
                    <li>Propose literary projects or initiatives</li>
                    <li>Vote on proposals with the community</li>
                    <li>Fund and follow the progress</li>
                </ol>
            </section>
            <h3>contributors</h3>
            <div className="contributors-grid">
                {contributors.map((person, index) => (
                    <div className="contributors-card" key={index}>
                        <div className="card-inner">
                            <div className="card-front">
                        <img src="/assets/avatar.png" />
                        <div className="contributors-info">
                            <h4>{person.name}</h4>
                            <p>{person.role}</p>
                        </div>
                        </div>
                        <div className="card-back">
                            <p>{person.contact}</p>
                            <p>{person.instagram}</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
