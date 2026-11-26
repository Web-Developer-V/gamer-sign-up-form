import { motion } from "motion/react";

import type { HandShakeCompleteProps } from "@/types/types";

export default function HandShakeComplete({ validateValue, setHasSubmitted, setShouldAnimateText, reset }: HandShakeCompleteProps) {
  const clickHandler = () => {
    reset();
    setHasSubmitted(false);
    setShouldAnimateText(false);
  };

  return (
    <motion.div key="complete" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/images/icon-hex-check.svg" alt="" aria-hidden="true" className="-ml-5 mb-2" />
      }
      <p className="flex mb-3">
        <span className="inline-flex gap-3 pt-2 mr-4">
          <span className="h-4 w-1 skew-x-[-35deg] bg-limes-500" />
          <span className="h-4 w-1 skew-x-[-35deg] bg-limes-500" />
        </span>
        <span className="font-orbitron font-extrabold text-[24px] text-neutral-100 leading-8 tracking-[0.04em]">HANDSHAKE COMPLETE</span>
      </p>
      <p className="text-[16px] leading-6 text-neutral-400">
        Operator <span className="text-limes-500">{validateValue.callsign}</span> provisioned. Your account is ready.
      </p>
      <button
        type="submit"
        className="w-full h-12.5 mt-8 text-[16px] leading-6 tracking-[0.16em] font-extrabold uppercase bg-limes-500 cursor-pointer hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-limes-500 transition-colors"
        onClick={clickHandler}
      >
        continue to log in
      </button>
    </motion.div>
  );
}
