import React, { useState } from 'react';
import NavBar2 from './components/NavBar2';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [country, setCountry] = useState('us'); // default to US

  return (
    <div>
      <Router>
        <NavBar2 selectedCountry={country} onCountryChange={setCountry} />
        <Routes>
          <Route
            exact
            path="/NewsAtlas"
            element={<News key={`general-${country}`} pageSize={5} country={country} category="general" />}
          />
          <Route
            exact
            path="/technology"
            element={<News key={`technology-${country}`} pageSize={5} country={country} category="technology" />}
          />
          <Route
            exact
            path="/sports"
            element={<News key={`sports-${country}`} pageSize={5} country={country} category="sports" />}
          />
          <Route
            exact
            path="/science"
            element={<News key={`science-${country}`} pageSize={5} country={country} category="science" />}
          />
          <Route
            exact
            path="/health"
            element={<News key={`health-${country}`} pageSize={5} country={country} category="health" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News key={`entertainment-${country}`} pageSize={5} country={country} category="entertainment" />}
          />
          <Route
            exact
            path="/business"
            element={<News key={`business-${country}`} pageSize={5} country={country} category="business" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
