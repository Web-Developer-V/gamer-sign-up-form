import FormSection from "@/components/form-section";
import PatternBackdrop from "@/components/particle/pattern-backdrop";

export default function Home() {
  return (
    <main className="relative w-full min-h-full max-[769px]:min-h-min">
      <PatternBackdrop />
      <FormSection />
    </main>
  );
}
