import React, { useState } from "react";

const WordCountEllipsis = ({ shortDesc, maxWords }) => {
  const [truncatedText, setTruncatedText] = useState("");

  // Function to count words and truncate with ellipsis if necessary
  const truncateText = (text, maxWords) => {
    const words = text.trim().split(/\s+/); // Split text into words
    if (words.length > maxWords) {
      const truncated = words.slice(0, maxWords).join(" ") + "..."; // Truncate and add '...'
      return truncated;
    }
    return text; // If it's less than max words, return as is
  };

  React.useEffect(() => {
    const newText = truncateText(shortDesc, maxWords);
    setTruncatedText(newText);
  }, [shortDesc, maxWords]);

  return (
    <div className="short-desc">
      <p>{truncatedText}</p>
    </div>
  );
};

export default WordCountEllipsis;
