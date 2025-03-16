import React from 'react';

type TranslationPaneProps = {
  type: string;
  title: string;
  sentences: string[];
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
  isInline: boolean;
};

export function TranslationPane({ type, title, sentences, hoveredIndex, onHover, isInline }: TranslationPaneProps) {
  return (
    <div className="bg-white p-6">
      <h2 className="text-md mb-4 text-gray-400">{type}</h2>
      <h2 className="text-xl font-serif mb-4 text-gray-800">{title}</h2>
      <div className="prose prose-lg font-serif ${isInline ? 'space-x-1' : 'space-y-4'}">
        {sentences.map((sentence, index) => (
          <React.Fragment key={index}>
            {sentence.trim() === '\n' ? (
              <div className="h-6" />
            ) : (
              <span
                className={`rounded ${isInline ? 'inline' : 'block whitespace-pre-line'} ${hoveredIndex === index ? 'bg-yellow-100' : 'hover:bg-gray-50'
                  } `}
                onMouseEnter={() => onHover(index)}
                onMouseLeave={() => onHover(null)}
              >
                {sentence}
              </span>
            )}
            {isInline && ' '}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}