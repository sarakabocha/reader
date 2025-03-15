import React, { useState } from 'react';
import { translations } from './data/translations';
import { TranslationPane } from './components/TranslationPane';

function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [selectedSet, setSelectedSet] = useState<string>('pangrams');

  const currentSet = translations[selectedSet];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">        
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
          <TranslationPane
            title="Original"
            sentences={currentSet.original}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
          />

          {/* Translated Text Column */}
          <TranslationPane
            title="Translated"
            sentences={currentSet.translated}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default App;