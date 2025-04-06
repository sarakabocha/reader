import React, { useEffect, useRef, useState } from "react";
import Poetry from "./data/poetry";
import Volume1 from "./data/volume_1";
import { TranslationPane } from "./components/TranslationPane";
import { ChevronDown } from "lucide-react";
import { BookMenu } from "./components/BookMenu";
import { Work } from "./data/collection";
import { processText } from "./utils/textProcessor";
import { DarkModeToggle } from "./components/DarkModeToggle";

// Helper function to get all entries in order
// const getAllEntries = () => {
//   return Object.values(books).flatMap(book => book.entries);
// };
const Collections = [Poetry, Volume1];

// Save selected work to localStorage
const saveSelectedWork = (work: Work) => {
  localStorage.setItem("selectedWork", JSON.stringify(work));
};

// Load selected work from localStorage
const loadSelectedWork = (): Work | undefined => {
  const savedWork = localStorage.getItem("selectedWork");
  if (savedWork) {
    return JSON.parse(savedWork);
  }
  return undefined;
};

function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedWork, setSelectedWork] = useState<Work>(
    loadSelectedWork() || Collections[0].works[0]
  );
  const handleWorkSelection = (work: Work) => {
    setSelectedWork(work);
    saveSelectedWork(work); // Save the new work
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });
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

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8 ">
      <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-8 md:mb-16 m-4 md:m-6" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-10 px-4 flex items-center gap-2 rounded-lg border border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors"
            aria-label="Select poem"
          >
            <span className="text-gray-700 dark:text-gray-300">
              {selectedWork.translations.original.title}
            </span>
            <ChevronDown
              size={20}
              className={`text-gray-500 dark:text-gray-400 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
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
                  handleWorkSelection(set);
                  saveSelectedWork(set);
                }}
              />
            </div>
          )}
        </div>
        <div>
          <h2 className="text-md md:text-xl mx-4 my-2 md:mx-6 text-gray-500 dark:text-gray-400">
            {`${selectedWork.author}`}
          </h2>
          <div className="text-md mx-4 md:mx-6 my-2 text-gray-400 dark:text-gray-400">
            {`${selectedWork.date}`}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-0 md:gap-8">
          <TranslationPane
            translationtype="Original"
            title={selectedWork.translations.original.title}
            sentences={processText(selectedWork.translations.original.content, {
              worktype: selectedWork.worktype,
            })}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            worktype={selectedWork.worktype}
          />
          <TranslationPane
            translationtype="Translated"
            title={selectedWork.translations.translated.title}
            sentences={processText(selectedWork.translations.translated.content, {
              worktype: selectedWork.worktype,
            })}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            worktype={selectedWork.worktype}
          />
        </div>
        <div className="text-center text-md mx-4 md:mx-6 mt-12 text-gray-400 dark:text-gray-400">{`Last updated ${selectedWork.lastModified}`}</div>
      </div>
    </div>
  );
}

export default App;
