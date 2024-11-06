// src/components/MapOverlay.tsx
import React from 'react';
import baseImg from './../assets/0-floor.png'
import layer from './../assets/0-floor.svg'
const MapOverlay: React.FC = () => {
    return (
        <div className="relative">
            <img src={baseImg} alt="Floor Plan" className="w-full" />
            <svg className="absolute inset-0 w-full h-full">
                <image href={layer} x="0" y="0" width="100%" height="100%" />
                {/* هنا تقدر تضيف عناصر الـ SVG بناءً على البيانات */}
            </svg>
        </div>
    );
};

export default MapOverlay;
