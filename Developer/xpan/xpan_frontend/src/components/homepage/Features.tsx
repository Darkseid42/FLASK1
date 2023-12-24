import React from 'react';
import { featuresList } from '@/constants/XpanFeatures';

interface Feature {
    name: string;
    icon: React.ComponentType<any>;
    description: string;
}

interface FeaturesListProps {
    featuresList: Feature[];
}

const Features: React.FC<FeaturesListProps> = () => {
    // Split the features into two arrays for two rows
    const featuresRow1 = featuresList.slice(0, 4);
    const featuresRow2 = featuresList.slice(4, 8);

    return (
        <div className="w-full flex flex-col items-center justify-center -mt-20 px-4 bg-white"> 
            <div className="max-w-6xl mx-auto"> 
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Rows 1 and 2 Combined */}
                    {[...featuresRow1, ...featuresRow2].map((feature, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-gray-100 bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg shadow-lg"> 
                            <div className="icon-container mb-4">
                                {React.createElement(feature.icon, { size: 40, className: 'text-red-600' })}
                            </div>
                            <h3 className="font-bold text-black mb-4">{feature.name}</h3>
                            <p className="text-gray-700 text-sm mb-6">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
