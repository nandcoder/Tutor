import React, { useState } from 'react';

import { loadModels } from './helpers/configFaceApi';
import { createFaLibrary } from './helpers/icons';
import Navbar from './components/Navbar'
import Grid from './components/Grid';

import './App.css';
import Contact from './components/Contact';
createFaLibrary();
loadModels();
function App() {
  const [page, setPage] = useState('Home')
  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {page === 'Home' && <Grid />}
      {page === 'Contact' && <Contact />}
    </div>
  );
}

export default App;
