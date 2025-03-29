import { Collection, Work } from "../data/collection";

type BookMenuProps = {
  collections: Collection[];
  selectedWork: Work | null;
  onSelect: (set: Work) => void;
};

export function BookMenu({ collections, selectedWork, onSelect }: BookMenuProps) {
  return (
    <div className="size:full md:w-[45vw] lg: bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-[calc(100vh-120px)] overflow-y-auto">
      {collections.map((collection) => (
        <div key={collection.name} className="border-b last:border-b-0 dark:border-gray-700">
          <div className="px-4 py-3 flex flex-row gap-2 items-center">
            <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
              {collection.name}
            </span>
          </div>

          <div className="px-2 py-1">
            {collection.works.map((work) => (
              <button
                key={work.translations.original.title}
                onClick={() => onSelect(work)}
                className={`dark:text-gray-100 w-full text-left px-4 py-2 rounded-md text-sm flex flex-col ${
                  selectedWork === work
                    ? "bg-gray-800 dark:bg-white text-white dark:text-gray-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700"
                }`}
              >
                {work.translations.original.title}
                <span
                  className={`text-gray-500 text-xs ${
                    selectedWork === work
                      ? "text-gray-400 dark:text-gray-500"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {work.translations.translated.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
