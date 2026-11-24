"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import type { inputProps } from "@/types/types";
import DecryptedText from "./motion/decrypted-text";
import Input from "./input";

export default function FormInput({ label, id, name, description, placeholder, type, autoComplete, isChecked, inputValue, passwordLevel, isValid, showPassWord, isSubmitted, change, compositionEnd, toggleShowPassword, setSubmitted }: inputProps) {
  const isPassword = type === "password" || type === "confirm_password";
  const passwordKey = type === "confirm_password" ? "confirm_password" : "password";
  const inputType = isPassword ? (showPassWord?.[passwordKey] ? "text" : "password") : type || "text";

  const passwordLevelCount = {
    week: 1,
    fair: 2,
    good: 3,
    strong: 4,
  };
  const fillBars = passwordLevel ? passwordLevelCount[passwordLevel] : 0;
  const helperText =
    (isSubmitted || inputValue) && !isValid
      ? id === "callsign"
        ? "Use at least 3 Characters"
        : id === "email"
          ? "Enter a valid email, like you@example.com"
          : id === "password"
            ? "Use at least 8 Characters"
            : id === "confirm_password"
              ? "Passwords don't match"
              : (description ?? "")
      : (description ?? "");

  const descriptionCss = "text-[12px] leading-4 text-neutral-400 leading-1";

  const [shouldAnimateText, setShouldAnimateText] = useState(false);
  const previousHelperText = useRef(helperText);

  useEffect(() => {
    if (previousHelperText.current !== helperText) {
      previousHelperText.current = helperText;
      setShouldAnimateText(true);
    }
  }, [helperText]);

  return (
    <li className="flex flex-col gap-y-2">
      <label htmlFor={id} className="text-[14px] leading-4 tracking-[0.04em] uppercase">
        <span className="mr-2 text-limes-500">&gt;</span>
        <span className="text-neutral-300">{label}</span>
      </label>
      <div className="relative">
        {isPassword && (
          <button
            aria-label={showPassWord?.[passwordKey] ? "비밀번호 숨기기" : "비밀번호 표시"}
            type="button"
            className="peer absolute z-1 right-2 top-1/2 p-1 translate-y-[-50%] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-limes-500 transition-all"
            onClick={() => toggleShowPassword?.(passwordKey)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" className="group">
              <path stroke="#9fadbc" strokeLinecap="square" strokeWidth="1.25" d="M1.667 10s3-5.833 8.333-5.833S18.334 10 18.334 10s-3 5.833-8.334 5.833S1.667 10 1.667 10Z" className="group-hover:stroke-white transition-all" />
              <path stroke="#9fadbc" strokeLinecap="square" strokeWidth="1.25" d="m10 7.5 2.5 2.5-2.5 2.5L7.5 10z" className="group-hover:stroke-white transition-all" />
            </svg>
          </button>
        )}
        <div className="relative group">
          <Input
            id={id}
            name={name}
            placeholder={placeholder}
            inputType={inputType}
            inputValue={inputValue}
            isValid={isValid}
            isSubmitted={isSubmitted}
            compositionEnd={compositionEnd}
            setSubmitted={setSubmitted}
            autoComplete={autoComplete}
            change={change}
          />
          {isChecked && <Image src="/images/icon-tick-20.svg" alt="검증 완료 아이콘" width={20} height={20} className={`absolute ${isPassword ? "right-11" : "right-4"} top-1/2 translate-y-[-50%]`} />}
        </div>
      </div>

      {type === "password" && (
        <div className="grid grid-cols-4 gap-x-1">
          {Array.from({ length: 4 }, (_, index) => {
            const verifiedColorCss =
              index < fillBars
                ? passwordLevel === "week"
                  ? "before:w-full before:bg-reds-400"
                  : passwordLevel === "fair"
                    ? "before:w-full before:bg-ambers-400"
                    : passwordLevel === "good" || passwordLevel === "strong"
                      ? "before:w-full before:bg-limes-500"
                      : undefined
                : "bg-neutral-700";

            return <div key={index} className={`h-1 relative before:absolute before:lef-0 before:top-0 before:w-0 before:h-full before:z-1 before:transition-all ${verifiedColorCss}`}></div>;
          })}
        </div>
      )}
      {!shouldAnimateText ? (
        <p className={descriptionCss}>{helperText}</p>
      ) : (
        <DecryptedText
          text={helperText}
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
          className="revealed"
          encryptedClassName="encrypted"
          parentClassName={`${descriptionCss}`}
        />
      )}
    </li>
  );
}
