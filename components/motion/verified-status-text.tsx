import { useEffect, useRef, useState } from "react";

import DecryptedText from "./decrypted-text";

import type { VerifiedStatusTextProps } from "@/types/types";

export default function VerifiedStatusText({ isValid, notValidText, validateValue, isComplete }: VerifiedStatusTextProps) {
  const statusText = isComplete ? "locked" : isValid ? "ok" : validateValue?.trim() ? notValidText : "pending";

  const [shouldAnimateText, setShouldAnimateText] = useState(false);
  const previousValidLength = useRef(statusText);

  useEffect(() => {
    if (previousValidLength.current !== statusText) {
      previousValidLength.current = statusText;
      setShouldAnimateText(true);
    }
  }, [statusText]);

  return (
    <>
      {!shouldAnimateText ? (
        <span>{statusText}</span>
      ) : (
        <DecryptedText
          text={statusText}
          animateOn="view"
          effect="scramble"
          sequential
          revealDirection="start"
          speed={60}
          maxIterations={10}
          hoverRadius={100}
          scrambleColor="#7d8c9b"
          loop={false}
          loopDelay={2000}
          useOriginalCharsOnly={false}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
          className={`revealed ${isValid === true ? "text-neutral-100" : validateValue?.trim() ? "text-reds-400" : undefined}`}
          encryptedClassName="encrypted"
        />
      )}
    </>
  );
}
