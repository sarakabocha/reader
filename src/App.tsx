import React, { useState } from 'react';
import { translations } from './data/translations';
import { TranslationPane } from './components/TranslationPane';
import { ChevronDown, GripHorizontal } from 'lucide-react';
import { AlignJustify } from 'lucide-react';

function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [selectedSet, setSelectedSet] = useState<string>('pangrams');
  const [isInline, setIsInline] = useState(true);
  const currentSet = translations[selectedSet];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 p-6">
          <div className="relative inline-block">
            <select
              value={selectedSet}
              onChange={(e) => setSelectedSet(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent cursor-pointer"
            >
              {Object.entries(translations).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
          </div>


          <button
            onClick={() => setIsInline(!isInline)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
          >
            {isInline ? (
              <>
                <GripHorizontal size={20} />
                <span>Inline</span>
              </>
            ) : (
              <>
                <AlignJustify size={20} />
                <span>Line Breaks</span>
              </>
            )}
          </button>
        </div>
        <div>

          <h2 className="font-serif text-xl m-6 text-gray-500">
            {currentSet.author && currentSet.author}
            {currentSet.year && ` — ${currentSet.year}`}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Original Text Column */}
          <TranslationPane
            type="Original"
            title={currentSet.title?.original[0] ?? ''}
            sentences={currentSet.contents.original}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            isInline={isInline}
          />

          {/* Translated Text Column */}
          <TranslationPane
            type="Translated"
            title={currentSet.title?.translated[0] ?? ''}
            sentences={currentSet.contents.translated}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            isInline={isInline}
          />
        </div>
      </div>
    </div>
  );
}

export default App;