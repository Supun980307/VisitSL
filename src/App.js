import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

const App = () => {
  // Assuming user is a state variable
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/Home" /> : <Login />} />
        {user && (
          <>
            <Route path="/Home" element={<Home />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
