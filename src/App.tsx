import React, { useEffect } from 'react';
import './App.css';
import { ui, uiConfig } from './firebaseConfig';  // Correct import of ui and uiConfig

function App() {
  useEffect(() => {
    // Initialize FirebaseUI authentication when the component mounts
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
    <div className="app-container">
      <h1>Library App - Sign In</h1>
      <div id="firebaseui-auth-container"></div> {/* FirebaseUI Auth container */}
    </div>
  );
}

export default App;

