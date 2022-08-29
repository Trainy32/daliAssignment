import React from 'react';

// style
import GlobalStyles from './styles/GlobalStyles';

// route
import { Routes, Route } from 'react-router-dom';
import FirstAssignment from './pages/FirstAssignment';
import SecondAssignment from './pages/SecondAssignment';

//components 
import ScrollRestore from './components/ScrollRestore';

function App() {
  return (
    <>
      <GlobalStyles />
      <ScrollRestore />
      <Routes>
        <Route path="/" element={<FirstAssignment />} />
        <Route path="/2" element={<SecondAssignment />} />
      </Routes>
    </>
  );
}

export default App;
