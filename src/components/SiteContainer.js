import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/SiteContainer.css";

export default function SiteContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="container">{renderPage()}</div>
      <Footer />
    </div>
  );
}
