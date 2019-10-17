import { useState, useEffect } from 'react';

function useDebounce(value: string) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const delay = 500;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue
}

export default useDebounce;
