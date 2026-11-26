"use client";

import { useEffect, useRef, useState } from "react";

export default function useAnimateOnValueChange(value: string | number) {
  const [shouldAnimateText, setShouldAnimateText] = useState(false);
  const previousHelperText = useRef(value);

  useEffect(() => {
    if (previousHelperText.current !== value) {
      previousHelperText.current = value;
      setShouldAnimateText(true);
    }
  }, [value]);

  return shouldAnimateText;
}
