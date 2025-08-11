import { useState, useEffect, useCallback, useMemo } from 'react';

export const useTypewriter = (text, speed = 100, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Memoize text length to avoid recalculation
  const textLength = useMemo(() => text.length, [text]);

  // Use callback to prevent unnecessary re-renders
  const updateText = useCallback(() => {
    if (currentIndex < textLength) {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex(prev => prev + 1);
    } else if (!isComplete) {
      setIsComplete(true);
    }
  }, [currentIndex, textLength, text, isComplete]);

  useEffect(() => {
    if (currentIndex < textLength) {
      const timeout = setTimeout(updateText, currentIndex === 0 ? delay : speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, textLength, updateText, delay, speed]);

  return { displayText, isComplete };
};