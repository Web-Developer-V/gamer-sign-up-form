export default function PatternBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute z-[-1] w-full h-full overflow-hidden before:content-[''] before:bg-[url('/images/pattern-backdrop.svg')] before:bg-center before:bg-no-repeat before:absolute before:top-1/2 before:right-[-17.5%] before:w-240 before:h-240 before:translate-y-[-50%] pointer-events-none max-[769px]:hidden"
    ></div>
  );
}
