// src/components/FilterPanel.tsx
import React from 'react';

const FilterPanel: React.FC = () => {
    return (
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg space-y-4">
            <div className="flex space-x-2 justify-center">
                <span className="text-sm font-medium">Type</span>
                <span className="text-sm font-medium text-gray-400">Availability</span>
            </div>

            <div className="space-y-2">
                <button className="bg-green-500 w-full py-2 rounded-lg text-center text-white">Commercial</button>
                <button className="bg-yellow-600 w-full py-2 rounded-lg text-center text-white">Administrative</button>
                <button className="bg-blue-600 w-full py-2 rounded-lg text-center text-white">Clinical</button>
            </div>

            <div>
                <label className="text-sm">Area</label>
                <input type="range" className="w-full" min="0" max="300" step="1" />
                <div className="text-xs text-gray-400 text-center">0.0 - 300.0 Sq.m</div>
            </div>

            <div>
                <label className="text-sm">Price</label>
                <input type="range" className="w-full" min="0" max="30000000" step="1000" />
                <div className="text-xs text-gray-400 text-center">LE 0.00 - 30.0M</div>
            </div>
        </div>
    );
};

export default FilterPanel;
