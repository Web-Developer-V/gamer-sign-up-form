"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";

import FormInput from "./form-input";
import DecryptedText from "./motion/decrypted-text";

import type { FormArticleProps, FormInputFieldsProps } from "@/types/types";
import HandShakeComplete from "./handshake-complete";

const formInputFields: FormInputFieldsProps[] = [
  {
    name: "callsign",
    id: "callsign",
    label: "callsign",
    type: "text",
    description: "3-20 characters: letters, numbers, _ or -",
    placeholder: "e.g.Vortex_07",
    autoComplete: "callsign",
  },
  {
    name: "email",
    id: "email",
    label: "email",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
  },
  {
    name: "password",
    id: "password",
    label: "password",
    type: "password",
    description: "At least 8 characters",
    autoComplete: "password",
  },
  {
    name: "confirm_password",
    id: "confirm_password",
    label: "confirm password",
    type: "password",
    autoComplete: "confirm_password",
  },
];

export default function FormArticle({ formActions, formState }: FormArticleProps) {
  const accentCss =
    "relative text-limes-500 cursor-pointer before:absolute before:content-[''] before:left-0 before:-bottom-0.5 before:w-full before:border-b before:border-dotted before:border-limes-700 hover:text-neutral-100 hover:before:border-neutral-100 before:transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-limes-500 transition-colors";

  const [isShowPassword, setIsShowPassword] = useState({
    password: false,
    confirm_password: false,
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [shouldAnimateText, setShouldAnimateText] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);

  const toggleShowPasswordHandler = (id: "password" | "confirm_password") => {
    setIsShowPassword((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setHasSubmitted(true);
    setShouldAnimateText(true);

    try {
      setIsTransmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 500));

      if (!Object.values(formState.isValid).every(Boolean)) {
        return;
      }

      formActions.completeFormHandler();
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
      <div className="flex flex-col justify-center w-full min-h-177.75 relative p-9 before:absolute before:right-0 before:-bottom-px before:w-6 before:h-0.5 before:bg-limes-500 after:absolute after:-right-px after:-bottom-px after:w-0.5 after:h-6 after:bg-limes-500">
        <AnimatePresence initial={false} mode="wait">
          {!formState.isComplete ? (
            <motion.div key="form" initial={{ y: 30, opacity: 1 }} animate={{ y: 0, opacity: 1 }}>
              <p className="flex justify-between pb-4 border-b border-neutral-700">
                <span className="text-[14px] leading-4 tracking-[0.04em] text-neutral-100 uppercase">new operator</span>
                <span className="text-[14px] leading-4 tracking-[0.04em] text-neutral-500 uppercase">all fields required</span>
              </p>
              <form onSubmit={formSubmit} className="mt-7">
                <ul className="flex flex-col gap-y-6">
                  {formInputFields.map((field) => {
                    const isPasswordField = field.name === "password" || field.name === "confirm_password";

                    return (
                      <FormInput
                        key={field.name}
                        {...field}
                        change={formActions.changeHandler}
                        compositionEnd={formActions.compositionEndHandler}
                        autoComplete={field.autoComplete}
                        isValid={formState.isValid[field.name]}
                        inputValue={formState.validateValue[field.name]}
                        hasSubmitted={hasSubmitted}
                        {...(isPasswordField && {
                          toggleShowPassword: toggleShowPasswordHandler,
                          showPassword: isShowPassword,
                        })}
                        {...(field.name === "password" ? { passwordLevel: formState.passwordLevel } : {})}
                      />
                    );
                  })}
                </ul>
                <div>
                  <div className="flex items-center gap-x-2.5 mt-3 mb-1">
                    <div className="relative inline-block w-5 h-5">
                      <input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        checked={formState.isValid.termsChecked}
                        onChange={() => formActions.toggleTermsHandler()}
                        className={`peer w-full h-full appearance-none bg-navy-950 border border-neutral-600 checked:bg-limes-500 checked:border-limes-500 cursor-pointer transition-colors hover:border-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-limes-500 ${hasSubmitted && !formState.isValid.termsChecked ? "border-reds-400" : undefined}`}
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
                  {!formState.isValid.termsChecked && shouldAnimateText && (
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
            </motion.div>
          ) : (
            <HandShakeComplete reset={formActions.resetFormHandler} validateValue={formState.validateValue} setHasSubmitted={setHasSubmitted} setShouldAnimateText={setShouldAnimateText} />
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
