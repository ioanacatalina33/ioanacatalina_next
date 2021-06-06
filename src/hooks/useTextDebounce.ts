import { useEffect, useState } from "react";

export function useTextDebounce(value: string, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [handler, setHandler] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (handler) clearTimeout(handler);
    setHandler(
      setTimeout(() => {
        setDebouncedValue(value);
      }, delay)
    );

    // Cancel the timeout if value changes (also on delay change or unmount)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue };
}
