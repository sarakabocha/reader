import React, { useState } from 'react';
import { translations } from './data/translations';
import { ChevronDown } from 'lucide-react';

function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [selectedSet, setSelectedSet] = useState<string>('pangrams');

  const currentSet = translations[selectedSet];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Translation Comparison
        </h1>
        
        <div className="mb-8 flex justify-center">
          <div className="relative inline-block">
            <select
              value={selectedSet}
              onChange={(e) => setSelectedSet(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            >
              {Object.entries(translations).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.name}
                </option>
              ))}
            </select>
            
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Original Text Column */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Original Text</h2>
            <div className="space-y-4">
              {currentSet.original.map((sentence, index) => (
                <p
                  key={index}
                  className={`p-2 rounded transition-colors duration-200 ${
                    hoveredIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {sentence}
                </p>
              ))}
            </div>
          </div>

          {/* Translated Text Column */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Translated Text</h2>
            <div className="space-y-4">
              {currentSet.translated.map((sentence, index) => (
                <p
                  key={index}
                  className={`p-2 rounded transition-colors duration-200 ${
                    hoveredIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {sentence}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;