import React from 'react';

function HighlightedText({ text }) {
  const highlightedText = text.split(/(\s+)/).map((word, index) => {
    return (
      <span key={index} className={word.includes('<highlight>') ? 'highlight' : ''}>
        {word.replace(/<highlight>/g, '').replace(/<\/highlight>/g, '')}
      </span>
    );
  });

  return (
    <div className="highlighted-text">
      {highlightedText}
    </div>
  );
}

export default HighlightedText;
