import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';

export default function PortfolioContainer() {
    //implement useState hook to display pages
    const [currentPage, setCurrentPage] = useState('About');

    //render pages according to what is selected
    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Skills') {
            return <Skills />
        }
        //default to About page
        return <About />
    };

    //function to handle page changes
    const handlePageChange = (newPage) => setCurrentPage(newPage);

    return (
        <div>
            {/* set up props for Nav component */}
            <Nav currenPage={currentPage} handlePageChange={handlePageChange} />
            {/* conditionally render the page selected */}
            {renderPage()}
        </div>
    );
}