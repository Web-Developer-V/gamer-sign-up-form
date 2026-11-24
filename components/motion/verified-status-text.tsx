import { useEffect, useRef, useState } from "react";
import DecryptedText from "./decrypted-text";

export default function VerifiedStatusText({ isValid, notValidText, validateValue }: { isValid: boolean; notValidText: string; validateValue?: string }) {
  const statusText = isValid ? "ok" : validateValue?.trim() ? notValidText : "pending";

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
          className={`revealed ${isValid === true ? "text-white" : validateValue?.trim() ? "text-reds-400" : undefined}`}
          encryptedClassName="encrypted"
        />
      )}
    </>
  );
}
