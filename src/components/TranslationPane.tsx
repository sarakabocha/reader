import React from 'react';

type TranslationPaneProps = {
  title: string;
  sentences: string[];
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
};

export function TranslationPane({ title, sentences, hoveredIndex, onHover }: TranslationPaneProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div>
        {sentences.map((sentence, index) => (
          <p
            key={index}
            className={`p-2 rounded ${
              hoveredIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'
            }`}
            onMouseEnter={() => onHover(index)}
            onMouseLeave={() => onHover(null)}
          >
            {sentence}
          </p>
        ))}
      </div>
    </div>
  );
}