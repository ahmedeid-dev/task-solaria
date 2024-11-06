// src/components/InfoPopup.tsx
import React from 'react';

type InfoPopupProps = {
    unitNumber: string;
    unitType: string;
    totalArea: string;
    price: string;
    availability: string;
};

const InfoPopup: React.FC<InfoPopupProps> = ({ unitNumber, unitType, totalArea, price, availability }) => {
    return (
        <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg space-y-2">
            <div className="flex justify-between">
                <span className="font-semibold">{unitNumber}</span>
                <span className={`text-sm font-medium ${availability === 'Available' ? 'bg-green-500' : 'bg-red-500'} px-2 py-1 rounded`}>
                    {availability}
                </span>
            </div>
            <div className="text-sm">Unit Type: {unitType}</div>
            <div className="text-sm">Total Area: {totalArea}</div>
            <div className="text-sm">Price: {price}</div>
            <button className="w-full bg-gray-600 py-2 mt-2 rounded-lg text-center text-white">Callback</button>
        </div>
    );
};

export default InfoPopup;
