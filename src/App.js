import React, { useEffect, useState } from ';
import about from './components/profile/about'
import navigation from './components/profile/navigation.js';
import footer from './components/profile/footer.js';
import contact from './components/profile/contact.js';
import projects from './components/profile/projects.js';


import './index.css'
import './App.css';

function displayPage({ thePage }) {

  if (thePage === '/') {
    return <about />;

  }
  if (thePage === 'about') {
    return <about />;
  }
  if (thePage === 'projects') {
    return <projects />;
  }

  if (thePage === 'contact') {
    return <contactForm />;
  }

  return null;
}

function App() {

  const [thePage, setPage] = useState(null);
  useEffect(function () {
    const splitUrl = window.location.href.split("/")
    if (splitUrl[splitUrl.length - 1] === '#home') {
      setPage('Home');
    }
    if (splitUrl[splitUrl.length - 1] === '#about') {
      setPage('About');
    }
    if (splitUrl[splitUrl.length - 1] === '#portfolio') {
      setPage('Portfolio');
    }
    if (splitUrl[splitUrl.length - 1] === '#contact') {
      setPage('Contact');
    }
  }, []


  )
 
  const handlePageChange = (page) => setPage(page);

  return (
    <div>
      <Navigation thePage={thePage} handlePageChange={handlePageChange} />
      <RenderPage thePage={thePage} />
      <Footer></Footer>
    </div>
  );
}

export default App;