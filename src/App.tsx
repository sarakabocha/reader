import React, { useEffect, useRef, useState } from "react";
import Poetry from "./data/poetry";
import Volume1 from "./data/volume_1";
import { TranslationPane } from "./components/TranslationPane";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { BookMenu } from "./components/BookMenu";
import { Process, Work } from "./data/collection";
import { DarkModeToggle } from "./components/DarkModeToggle";
import "./styles/buttons.css";
import "./styles/typography.css";

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

  // Calculate all works once
  const allWorks = Collections.flatMap((collection) => collection.works);

  // Calculate current index and navigation works
  const currentIndex = allWorks.findIndex(
    (work) => work.translations.original.title === selectedWork.translations.original.title
  );
  const previousWork = currentIndex > 0 ? allWorks[currentIndex - 1] : null;
  const nextWork = currentIndex < allWorks.length - 1 ? allWorks[currentIndex + 1] : null;

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

  const processedOriginal = Process(
    selectedWork.translations.original.content,
    selectedWork.worktype
  );
  const processedTranslation = Process(
    selectedWork.translations.translated.content,
    selectedWork.worktype
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 md:p-8">
      <DarkModeToggle isDark={isDark} onToggle={toggleDarkMode} />
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-8 md:mb-16 m-4 md:m-6" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn"
            aria-label="Select a work"
          >
            <span className="text-primary text-medium">
              {selectedWork.translations.original.title}
            </span>
            <ChevronDown
              size={20}
              className={`text-secondary transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
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
          <h2 className="text-medium text-secondary mx-4 my-2 md:mx-6">{`${selectedWork.author}`}</h2>
          <div className="text-small text-muted mx-4 md:mx-6 my-2">{`${selectedWork.date}`}</div>
        </div>
        <div className="grid grid-cols-2 gap-0 md:gap-8">
          <TranslationPane
            translationtype="Original"
            title={selectedWork.translations.original.title}
            sentences={processedOriginal}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            worktype={selectedWork.worktype}
          />
          <TranslationPane
            translationtype="Translated"
            title={selectedWork.translations.translated.title}
            sentences={processedTranslation}
            hoveredIndex={hoveredIndex}
            onHover={setHoveredIndex}
            worktype={selectedWork.worktype}
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            className={`btn-minimal ${!previousWork && "opacity-0"}`}
            onClick={() => previousWork && handleWorkSelection(previousWork)}
          >
            <ArrowLeft size={20} className="btn-text" />
            <span className="text-primary text-medium">
              {previousWork?.translations.original.title}
            </span>
          </button>

          <div className="text-small text-muted">{`Last updated ${selectedWork.lastModified}`}</div>

          <button
            className={`btn-minimal ${!nextWork && "opacity-0"}`}
            onClick={() => nextWork && handleWorkSelection(nextWork)}
          >
            <span className="text-primary text-medium">
              {nextWork?.translations.original.title}
            </span>
            <ArrowRight size={20} className="btn-text" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
