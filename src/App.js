import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConnectionStatus from './components/ConnectionStatus/ConnectionStatus';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/conn-back" element={<ConnectionStatus />} />
              {
                  
              }
          </Routes>
      </Router>
  );
}

export default App;
