import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [content] = useState([
    <About></About>,
    <Portfolio></Portfolio>,
    <Contact></Contact>,
    <Resume></Resume>
  ]);

  const [currentContent, setCurrentContent] = useState(content[0]);

  return (
    <div>
      <Header 
        className="flex-row"
        content={content}
        setCurrentContent={setCurrentContent}
        currentContent={currentContent}
      ></Header>
      <section>
        {currentContent}
      </section>
      <Footer className="flex-row"></Footer>
    </div>
  );
}

export default App;
