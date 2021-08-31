import React from 'react';
import Onboarding from "./pages/onboarding/Onboarding";
import CountryProvider from "./contexts/country/CountryContext";
import './App.css';

function App() {
  return (
      <CountryProvider>
          <div className="App">
              <Onboarding />
          </div>
      </CountryProvider>
  );
}

export default App;
