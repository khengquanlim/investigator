import React, { useState, useEffect } from 'react';
import { fetchStockSuggestions } from '../../../../services/StockService';
import './AutoCompleteSuggestion.css';

const AutoCompleteSuggestion = ({ query, onSelect }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async (query) => {
        setLoading(true);
        try {
            const response = await fetchStockSuggestions(query);
            console.log("what is response -=- ", response);
            setSuggestions(response);
        } catch (error) {
            console.error('Error fetching data:', error);
            setSuggestions([]);
        } finally {
            setLoading(false);
        }
    };

    if (query) {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }

      setTypingTimeout(
        setTimeout(() => {
            fetchSuggestions(query);
        }, 2000)
      );
    } else {
        setSuggestions([]);
    }
    return () => {
       if (typingTimeout) {
         clearTimeout(typingTimeout);
       }
    };
  }, [query]);

  return (
    <div className="auto-complete-suggestion">
      {loading && <div>Loading...</div>}
      {!loading && suggestions.length === 0 && query && (
        <div className="no-results-message">No results found for "{query}"</div>
      )}
      {!loading && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="suggestion-item" onClick={() => onSelect(suggestion['1. symbol'])}>
              <span className="suggestion-name">{suggestion['2. name']}</span>
              <span className="suggestion-symbol">{suggestion['1. symbol']}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteSuggestion;