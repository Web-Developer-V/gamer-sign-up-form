import type { InputProps } from "@/types/types";

export default function Input({ id, name, placeholder, type, isValid, inputValue, hasSubmitted, autoComplete, compositionEnd, change }: InputProps) {
  return (
    <input
      type={type}
      className={`w-full h-11.25 px-3.5 bg-navy-950 border border-neutral-600 text-[16px] leading-6 text-neutral-300 group-hover:border-neutral-300 transition-all peer-hover:border-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-limes-500 ${(hasSubmitted || inputValue) && !isValid ? "outline-2 outline-offset-2 outline-reds-400 focus-visible:outline-reds-400" : undefined}`}
      placeholder={placeholder}
      name={name}
      id={id}
      autoComplete={autoComplete}
      value={inputValue}
      onChange={change}
      onCompositionEnd={compositionEnd}
    />
  );
}
