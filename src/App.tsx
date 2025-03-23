import React, { useEffect, useRef, useState } from "react";
import Poetry from "./data/poetry";
import Volume1 from "./data/volume_1";
import { TranslationPane } from "./components/TranslationPane";
import { ChevronDown } from "lucide-react";
import { BookMenu } from "./components/BookMenu";
import { Work } from "./data/collection";
import { processText } from "./utils/textProcessor";

// Helper function to get all entries in order
// const getAllEntries = () => {
//   return Object.values(books).flatMap(book => book.entries);
// };

const Collections = [Poetry, Volume1];

function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedWork, setSelectedWork] = useState<Work>(Collections[0].works[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // const allEntries = getAllEntries();
  // const currentIndex = allEntries.indexOf(selectedSet);
  // const previousEntry = currentIndex > 0 ? allEntries[currentIndex - 1] : null;
  // const nextEntry = currentIndex < allEntries.length - 1 ? allEntries[currentIndex + 1] : null;

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-8 m-6" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-10 px-4 flex items-center gap-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Select poem"
          >
            <span className="text-gray-700">{selectedWork.translations.original.title}</span>
            <ChevronDown
              size={20}
              className={`text-gray-500 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isMenuOpen && (
            <div className="absolute top-full left-0 mt-2 z-50">
              <BookMenu
                collections={Collections}
                selectedWork={selectedWork}
                onSelect={(set) => {
                  setSelectedWork(set);
                  setIsMenuOpen(false);
                }}
              />
            </div>
          )}
        </div>

        <div>
          <h2 className="font-serif text-xl m-6 text-gray-500">
            {`${selectedWork.author} – ${selectedWork.date}`}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <TranslationPane
            type="Original"
            title={selectedWork.translations.original.title}
            sentences={processText(selectedWork.translations.original.content, {
              type: selectedWork.type,
            })}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
          />
          <TranslationPane
            type="Translated"
            title={selectedWork.translations.translated.title}
            sentences={processText(selectedWork.translations.translated.content, {
              type: selectedWork.type,
            })}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
