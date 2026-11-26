import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.svg";
import VerifiedListItem from "./verified-list-item";
import VerifiedListItemTitle from "./verified-list-item-title";
import VerifiedStatusText from "./motion/verified-status-text";
import DecryptedText from "./motion/decrypted-text";

import type { VerifiedStatusArticleProps } from "@/types/types";
import useAnimateOnValueChange from "@/hooks/use-animate-on-value-change";

export default function VerifiedStatusArticle({ isValid, validateValue, isComplete }: VerifiedStatusArticleProps) {
  const isValidLength = Object.values(isValid).filter(Boolean).length;
  const totalLength = Object.keys(isValid).length;
  const completeValid = Object.values(isValid).every(Boolean);

  const shouldAnimateText = useAnimateOnValueChange(isValidLength);

  return (
    <article className="w-[55%] max-[1025px]:w-[50%] max-[769px]:w-full">
      <div>
        <h1 className="flex items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="로고" />
          </Link>
          <ul className="min-[769px]:hidden">
            <VerifiedListItem>
              {!isComplete ? (
                <span className={completeValid ? "text-limes-500" : ""}>
                  {!shouldAnimateText ? (
                    <span>{isValidLength}</span>
                  ) : (
                    <DecryptedText
                      text={String(isValidLength) ?? ""}
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
                      characters="1234567890"
                      className="revealed"
                      encryptedClassName="encrypted"
                    />
                  )}
                  /<span>{totalLength}</span> ready
                </span>
              ) : (
                <DecryptedText
                  text="provisioned"
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
                  className={`revealed uppercase ${isComplete ? "text-limes-500" : ""}`}
                  encryptedClassName="encrypted"
                />
              )}
            </VerifiedListItem>
          </ul>
        </h1>
        <h2 className="mt-20 max-[769px]:mt-8">
          <span className="inline-flex gap-7 pt-2 mr-7 max-[1025px]:gap-4 max-[1025px]:mr-4">
            <span className="h-12 w-3 skew-x-[-35deg] bg-limes-500 max-[1025px]:h-8 max-[1025px]:w-2" />
            <span className="h-12 w-3 skew-x-[-35deg] bg-limes-500 max-[1025px]:h-8 max-[1025px]:w-2" />
          </span>
          <span className="font-orbitron font-extrabold text-neutral-100 text-[72px] leading-20 tracking-[0.04em] uppercase max-[1025px]:text-[40px] max-[1025px]:leading-12 max-[1025px] max-[769px]:text-[36px] max-[769px]:leading-10">
            join the <br />
            nexus
          </span>
        </h2>
        <p className="mt-4 font-normal text-neutral-400 text-[14px] leading-6 tracking-[0.04em] uppercase">initialize your neoncore identity</p>
      </div>
      <div className="mt-14 border-t border-neutral-700 max-[769px]:mt-7">
        <ul className="flex flex-col gap-y-0.5 pt-5 uppercase">
          <VerifiedListItem className="max-[769px]:hidden">
            <span>operator id</span>
            {!isComplete ? (
              <span className={completeValid ? "text-limes-500" : ""}>
                {!shouldAnimateText ? (
                  <span>{isValidLength}</span>
                ) : (
                  <DecryptedText
                    text={String(isValidLength) ?? ""}
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
                    characters="1234567890"
                    className="revealed"
                    encryptedClassName="encrypted"
                  />
                )}
                /<span>{totalLength}</span> ready
              </span>
            ) : (
              <DecryptedText
                text="provisioned"
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
                className={`revealed uppercase ${isComplete ? "text-limes-500" : ""}`}
                encryptedClassName="encrypted"
              />
            )}
          </VerifiedListItem>
          <li className="flex justify-between my-2 font-orbitron font-extrabold text-neutral-300 text-[24px] leading-8 tracking-[0.04em] uppercase min-[769px]:block max-[769px]:text-[14px] max-[769px]:leading-6 max-[769px]:text-neutral-400">
            <span className="min-[769px]:hidden">operator id</span>
            {!shouldAnimateText ? (
              <span>unassigned</span>
            ) : (
              <DecryptedText
                text={(isValid.callsign ? validateValue?.callsign : "unassigned") ?? ""}
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
                className={`revealed ${isValid.callsign ? "text-neutral-100" : undefined}`}
                encryptedClassName="encrypted"
              />
            )}
          </li>
          <VerifiedListItem className="max-[769px]:hidden">
            <VerifiedListItemTitle title="callsign" />
            <VerifiedStatusText isValid={isValid.callsign} notValidText="Too Short" validateValue={validateValue?.callsign} isComplete={isComplete} />
          </VerifiedListItem>
          <VerifiedListItem className="max-[769px]:hidden">
            <VerifiedListItemTitle title="email" />
            <VerifiedStatusText isValid={isValid.email} notValidText="Marformed" validateValue={validateValue?.email} isComplete={isComplete} />
          </VerifiedListItem>
          <VerifiedListItem className="max-[769px]:hidden">
            <VerifiedListItemTitle title="password" />
            <VerifiedStatusText isValid={isValid.password} notValidText="Too  Short" validateValue={validateValue?.password} isComplete={isComplete} />
          </VerifiedListItem>
          <VerifiedListItem className="max-[769px]:hidden">
            <VerifiedListItemTitle title="confirm" />
            <VerifiedStatusText isValid={isValid.confirm_password} notValidText="Mismatch" validateValue={validateValue?.confirm_password} isComplete={isComplete} />
          </VerifiedListItem>
          <VerifiedListItem className="max-[769px]:hidden">
            <VerifiedListItemTitle title="terms" />
            <VerifiedStatusText isValid={isValid.termsChecked} notValidText="Required" isComplete={isComplete} />
          </VerifiedListItem>
        </ul>
      </div>
    </article>
  );
}
