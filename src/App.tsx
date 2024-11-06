// src/App.tsx
import React from 'react';
import FilterPanel from './components/FilterPanel';
import InfoPopup from './components/InfoPopup';
import MapOverlay from './components/MapOverlay';

const App: React.FC = () => {
  return (
    <div className="flex space-x-4 p-4">
      <FilterPanel />
      <div className="relative w-full">
        <MapOverlay />
        <div className="absolute bottom-4 right-4">
          <InfoPopup unitNumber="Unit 104" unitType="Commercial" totalArea="53 M²" price="0 EGP" availability="Available" />
        </div>
      </div>
    </div>
  );
};

export default App;
