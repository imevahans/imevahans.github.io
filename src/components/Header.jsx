import React from 'react';
function Header() {
    return (
        <header className="bg-transparent navbar">
            <nav className="flex items-center justify-center h-16 navbar">
                <ul className="flex space-x-16">
                <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
                <li><a href="#resume" className="text-white hover:text-gray-300">Resume</a></li>
                <li><a href="#ProjectDiv" className="text-white hover:text-gray-300">Projects</a></li>
                <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header