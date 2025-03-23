import { Collection, Work } from "../data/collection";

type BookMenuProps = {
  collections: Collection[];
  selectedWork: Work | null;
  onSelect: (set: Work) => void;
};

export function BookMenu({ collections, selectedWork, onSelect }: BookMenuProps) {
  return (
    <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg max-h-[calc(100vh-120px)] overflow-y-auto">
      {collections.map((collection) => (
        <div key={collection.name} className="border-b last:border-b-0">
          <div className="px-4 py-3">
            <span className="font-medium text-gray-700 text-sm">{collection.name}</span>
          </div>

          <div className="px-2 py-1">
            {collection.works.map((work) => (
              <button
                key={work.translations.original.title}
                onClick={() => onSelect(work)}
                className={`w-full text-left px-4 py-2 rounded-md text-sm ${
                  selectedWork === work
                    ? "bg-yellow-50 text-yellow-700"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {work.translations.original.title}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
