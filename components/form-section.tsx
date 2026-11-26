"use client";

import useValidateForm from "@/hooks/use-validate-form";
import FormArticle from "./form-article";
import VerifiedStatusArticle from "./verified-status-article";

export default function FormSection() {
  const { formActions, formState } = useValidateForm();

  return (
    <section className="flex gap-x-20 items-center w-full h-full max-w-280 mx-auto py-20">
      <VerifiedStatusArticle isValid={formState.isValid} validateValue={formState.validateValue} isComplete={formState.isComplete} />
      <FormArticle formActions={formActions} formState={formState} />
    </section>
  );
}
