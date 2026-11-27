import Image from "next/image";

import type { FormInputProps } from "@/types/types";
import DecryptedText from "./motion/decrypted-text";
import Input from "./input";
import useAnimateOnValueChange from "@/hooks/use-animate-on-value-change";

export default function FormInput({ isValid, inputValue, passwordLevel, hasAttemptedSubmit, showPassword, change, compositionEnd, toggleShowPassword, ...field }: FormInputProps) {
  const isPassword = field.type === "password";
  const passwordKey = field.name === "confirm_password" ? "confirm_password" : "password";
  const inputType = isPassword ? (showPassword?.[passwordKey] ? "text" : "password") : field.type || "text";

  const passwordLevelCount = {
    weak: 1,
    fair: 2,
    good: 3,
    strong: 4,
  };
  const fillBars = passwordLevel ? passwordLevelCount[passwordLevel] : 0;
  const helperText =
    (hasAttemptedSubmit || inputValue) && !isValid
      ? field.id === "callsign"
        ? "Use at least 3 Characters"
        : field.id === "email"
          ? "Enter a valid email, like you@example.com"
          : field.id === "password"
            ? "Use at least 8 Characters"
            : field.id === "confirm_password"
              ? "Passwords don't match"
              : (field.description ?? "")
      : (field.description ?? "");

  const descriptionCss = `flex text-[12px] leading-4 text-neutral-400 leading-1 ${(hasAttemptedSubmit || inputValue) && !isValid && "text-reds-400"}`;
  const shouldAnimateText = useAnimateOnValueChange(helperText);

  return (
    <li className="flex flex-col gap-y-2">
      <label htmlFor={field.id} className="text-[14px] leading-4 tracking-[0.04em] uppercase">
        <span className="mr-2 text-limes-500">&gt;</span>
        <span className="text-neutral-300">{field.label}</span>
      </label>
      <div className="relative">
        {isPassword && (
          <button
            aria-label={showPassword?.[passwordKey] ? "비밀번호 숨기기" : "비밀번호 표시"}
            type="button"
            className={`peer absolute z-1 right-2 top-1/2 p-1 translate-y-[-50%] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-limes-500 transition-all ${(hasAttemptedSubmit || inputValue) && !isValid && "focus-visible:outline-reds-400"}`}
            onClick={() => toggleShowPassword?.(passwordKey)}
          >
            <img src={!showPassword?.[passwordKey] ? "/images/icon-eye.svg" : "/images/icon-eye-off.svg"} alt={!showPassword?.[passwordKey] ? "비밀번호 표시 아이콘" : "비밀번호 숨기기 아이콘"} width={20} />
          </button>
        )}
        <div className="relative group">
          <Input
            id={field.id}
            name={field.name}
            placeholder={field.placeholder}
            type={inputType}
            inputValue={inputValue}
            isValid={isValid}
            hasAttemptedSubmit={hasAttemptedSubmit}
            compositionEnd={compositionEnd}
            autoComplete={field.autoComplete}
            change={change}
          />
          {isValid && <Image src="/images/icon-tick-20.svg" alt="검증 완료 아이콘" width={20} height={20} className={`absolute ${isPassword ? "right-11" : "right-4"} top-1/2 translate-y-[-50%]`} />}
        </div>
      </div>

      {field.name === "password" && (
        <div className="grid grid-cols-4 gap-x-1">
          {Array.from({ length: 4 }, (_, index) => {
            const verifiedColorCss =
              index < fillBars
                ? passwordLevel === "weak"
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
        <p className="flex items-center">
          {(hasAttemptedSubmit || inputValue) && !isValid && <img src="/images/icon-alert.svg" alt="경고 아이콘" className="w-4 mr-2" />}
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
            parentClassName={descriptionCss}
          />
        </p>
      )}
    </li>
  );
}
