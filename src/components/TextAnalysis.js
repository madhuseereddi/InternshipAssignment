import React from 'react';
import HighlightedText from './HighLightedText';

function TextAnalysis() {
  let text = '';
  let searchString = '';
  let replaceString = '';

  const [uniqueWordCount, setUniqueWordCount] = React.useState(0);
  const [charCount, setCharCount] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');

  const handleTextChange = (event) => {
    text = event.target.value;
    setDisplayText(text);

    // Unique words calculation
    const wordsArray = text.match(/\w+/g) || [];
    const uniqueWords = new Set(wordsArray.map(word => word.toLowerCase()));
    setUniqueWordCount(uniqueWords.size);

    // Character count calculation
    const characterCount = text.replace(/[\s\W]/g, '').length;
    setCharCount(characterCount);
  };

  const handleSearchChange = (event) => {
    searchString = event.target.value;
  };

  const handleReplaceChange = (event) => {
    replaceString = event.target.value;
  };

  const handleReplaceAll = () => {
    const regex = new RegExp(searchString, 'g');
    const newText = displayText.replace(regex, replaceString);
    setDisplayText(newText);
  };

  return (
    <div className="text-analysis">
      <textarea
        rows="10"
        cols="50"
        value={displayText}
        onChange={handleTextChange}
        placeholder="Type your text here..."
      />
      <div className="stats">
        <p>Unique Word Count: {uniqueWordCount}</p>
        <p>Character Count (excluding spaces and punctuation): {charCount}</p>
      </div>
      <input
        type="text"
        placeholder="Search for..."
        onChange={handleSearchChange}
      />
      <input
        type="text"
        placeholder="Replace with..."
        onChange={handleReplaceChange}
      />
      <button onClick={handleReplaceAll}>Replace All</button>
      <HighlightedText text={displayText} />
    </div>
  );
}

export default TextAnalysis;
