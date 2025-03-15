import React from 'react';

type TranslationPaneProps = {
  title: string;
  sentences: string[];
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
  isInline: boolean;
};

export function TranslationPane({ title, sentences, hoveredIndex, onHover, isInline }: TranslationPaneProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-serif font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="prose prose-lg font-serif ${isInline ? 'space-x-1' : 'space-y-4'}">
      {sentences.map((sentence, index) => (
      <React.Fragment key={index}>
      <span
            className={`rounded ${isInline ? 'inline' : 'block'} ${
              hoveredIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'
            } `}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
          >
            {sentence}
            </span>
            {' '}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}