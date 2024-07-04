import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('Tokyo');

  const handleSearch = (city: string) => {
    setCity(city);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        <WeatherDisplay city={city} />
      </header>
    </div>
  );
};

export default App;
