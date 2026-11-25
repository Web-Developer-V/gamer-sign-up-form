import { VerifiedListItemTitleProps } from "@/types/types";

export default function VerifiedListItemTitle({ title }: VerifiedListItemTitleProps) {
  return (
    <p className="grid grid-cols-[auto_1fr] mr-3 items-center gap-3 flex-1">
      <span className="relative z-1 whitespace-nowrap">{title}</span>
      <span className="border-b border-dashed border-neutral-700" />
    </p>
  );
}
