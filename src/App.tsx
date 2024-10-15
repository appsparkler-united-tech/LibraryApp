import React, { useEffect } from 'react';
import './App.css';
import { app } from './firebaseConfig'; // Import Firebase configuration

function App() {
  useEffect(() => {
    // Example: Use Firebase analytics or Firestore here
    console.log('Firebase initialized:', app);
  }, []);

  return (
    <div className="app-container">
      <input type="text" placeholder="Find Your Next Read" className="search-bar" />
    </div>
  );
}

export default App;
