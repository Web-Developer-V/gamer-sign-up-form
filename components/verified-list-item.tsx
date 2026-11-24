import type { verifiedListItemProps } from "@/types/types";

export default function VerifiedListItem({ children }: verifiedListItemProps) {
  return <li className="flex justify-between font-normal text-neutral-400 text-[14px] leading-6 tracking-[0.04em] uppercase">{children}</li>;
}
