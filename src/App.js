import React from 'react';
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Resume from "./components/Resume.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <body>
        <div className='background1' id="home">
          <Header />
          <Section />
        </div>
        <div id="resume">
          <Resume />
          <div className='footer'>
            <Footer />
          </div>
          
        </div>
    </body>
  );
}

export default App;
