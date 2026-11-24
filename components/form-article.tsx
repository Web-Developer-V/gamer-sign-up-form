"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import FormInput from "./form-input";
import DecryptedText from "./motion/decrypted-text";

import type { formArticleProps } from "@/types/types";
import HandShakeComplete from "./handshake-complete";

export default function FormArticle({ change, compositionEnd, setIsValid, isValid, validateValue, passwordLevel }: formArticleProps) {
  const accentCss =
    "relative text-limes-500 cursor-pointer before:absolute before:content-[''] before:left-0 before:-bottom-0.5 before:w-full before:border-b before:border-dotted before:border-limes-700 hover:text-neutral-100 hover:before:border-neutral-100 before:transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-limes-500 transition-colors";

  const [isShowPassword, setIsShowPassword] = useState({
    password: false,
    confirm_password: false,
  });
  const [isSubmitted, setSubmitted] = useState({
    callsign: false,
    email: false,
    password: false,
    confirm_password: false,
    termsCheck: false,
  });
  const [shouldAnimateText, setShouldAnimateText] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);

  const toggleShowPasswordHandler = (id: "password" | "confirm_password") => {
    setIsShowPassword((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted({
      callsign: true,
      email: true,
      password: true,
      confirm_password: true,
      termsCheck: true,
    });
    setShouldAnimateText(true);

    try {
      setIsTransmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (!Object.values(isValid).every(Boolean)) {
        return;
      }

      setIsComplete(true);
    } catch (error) {
      setIsTransmitting(false);
      console.error(error);
    } finally {
      setIsTransmitting(false);
    }
  };

  const descriptionCss = "text-[12px] leading-4 text-neutral-400 leading-1";
  const helperText = "Accept the terms to continue";

  return (
    <article className="relative w-[45%] bg-neutral-900 border border-neutral-700 before:absolute before:left-0 before:-top-px before:w-6 before:h-0.5 before:bg-limes-500 after:absolute after:-left-px after:-top-px after:w-0.5 after:h-6 after:bg-limes-500">
      {!isComplete ? (
        <div className="relative p-10 before:absolute before:right-0 before:-bottom-px before:w-6 before:h-0.5 before:bg-limes-500 after:absolute after:-right-px after:-bottom-px after:w-0.5 after:h-6 after:bg-limes-500">
          <p className="flex justify-between pb-4 border-b border-neutral-700">
            <span className="text-[14px] leading-4 tracking-[0.04em] text-neutral-100 uppercase">new operator</span>
            <span className="text-[14px] leading-4 tracking-[0.04em] text-neutral-500 uppercase">all fields required</span>
          </p>
          <form onSubmit={formSubmit} className="mt-7">
            <ul className="flex flex-col gap-y-6">
              <FormInput
                name="callsign"
                id="callsign"
                label="callsign"
                description="3-20 characters: letters, numbers, _ or -"
                placeholder="e.g.Vortex_07"
                autoComplete="callsign"
                change={change}
                compositionEnd={compositionEnd}
                isValid={isValid.callsign}
                isChecked={isValid.callsign}
                inputValue={validateValue.callsign}
                isSubmitted={isSubmitted.callsign}
                setSubmitted={setSubmitted}
              />
              <FormInput
                name="email"
                id="email"
                label="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                change={change}
                compositionEnd={compositionEnd}
                isValid={isValid.email}
                isChecked={isValid.email}
                inputValue={validateValue.email}
                isSubmitted={isSubmitted.email}
                setSubmitted={setSubmitted}
              />
              <FormInput
                name="password"
                id="password"
                label="password"
                type="password"
                description="At least 8 characters"
                autoComplete="password"
                change={change}
                compositionEnd={compositionEnd}
                toggleShowPassword={toggleShowPasswordHandler}
                showPassWord={isShowPassword}
                isValid={isValid.password}
                isChecked={isValid.password}
                inputValue={validateValue.password}
                passwordLevel={passwordLevel}
                isSubmitted={isSubmitted.password}
                setSubmitted={setSubmitted}
              />
              <FormInput
                name="confirm_password"
                id="confirm_password"
                label="confirm password"
                type="confirm_password"
                autoComplete="confirm_password"
                change={change}
                compositionEnd={compositionEnd}
                toggleShowPassword={toggleShowPasswordHandler}
                showPassWord={isShowPassword}
                isValid={isValid.confirm_password}
                isChecked={isValid.confirm_password}
                inputValue={validateValue.confirm_password}
                isSubmitted={isSubmitted.confirm_password}
                setSubmitted={setSubmitted}
              />
            </ul>
            <div>
              <div className="flex items-center gap-x-2.5 mt-3 mb-1">
                <div className="relative inline-block w-5 h-5">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    checked={isValid.termsCheck}
                    onChange={() =>
                      setIsValid((prev) => ({
                        ...prev,
                        termsCheck: !prev.termsCheck,
                      }))
                    }
                    className={`peer w-full h-full appearance-none bg-navy-950 border border-neutral-600 checked:bg-limes-500 checked:border-limes-500 cursor-pointer transition-colors hover:border-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-limes-500 ${isSubmitted.termsCheck ? "border-reds-400" : undefined}`}
                  />
                  <Image
                    src="/images/icon-tick-16.svg"
                    alt="체크박스 아이콘"
                    width={13}
                    height={13}
                    className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] pointer-events-none opacity-0 peer-checked:opacity-100 transition-colors"
                  />
                </div>
                <p className="text-[12px] text-neutral-300 leading-4 tracking-[0.08em]">
                  I accept the{" "}
                  <button type="button" className={accentCss}>
                    Terms
                  </button>{" "}
                  and{" "}
                  <button type="button" className={accentCss}>
                    Privacy Policy
                  </button>
                  .
                </p>
              </div>
              {!isValid.termsCheck && shouldAnimateText && (
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
            </div>

            <button
              type="submit"
              className={`w-full h-12.5 mt-6 text-[16px] leading-6 tracking-[0.16em] font-extrabold uppercase bg-limes-500 cursor-pointer hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-limes-500 transition-colors ${isTransmitting ? "bg-neutral-900 border border-limes-500 text-limes-500" : undefined}`}
            >
              {isTransmitting ? "transmitting_" : "initialize account"}
            </button>

            <p className="mt-7 text-[12px] text-neutral-300 leading-4 tracking-[0.08em] text-center">
              Already an operator?{" "}
              <Link href="/" className={accentCss}>
                Log in
              </Link>
            </p>
          </form>
        </div>
      ) : (
        <HandShakeComplete />
      )}
    </article>
  );
}
