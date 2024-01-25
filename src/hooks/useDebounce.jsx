import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
      console.log("디바운싱 적용중");
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return { debounceValue };
}
