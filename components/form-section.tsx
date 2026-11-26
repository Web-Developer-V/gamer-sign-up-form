"use client";

import useValidateForm from "@/hooks/use-validate-form";
import FormArticle from "./form-article";
import VerifiedStatusArticle from "./verified-status-article";

export default function FormSection() {
  const { formActions, formState } = useValidateForm();

  return (
    <section className="flex flex-col gap-y-10 items-center w-full h-full max-w-280 mx-auto py-20 min-[769px]:flex-row min-[1025px]:gap-x-20 max-[769px]:py-10 max-[1025px]:gap-x-10 max-[1181px]:max-w-none max-[1181px]:px-7.5">
      <VerifiedStatusArticle isValid={formState.isValid} validateValue={formState.validateValue} isComplete={formState.isComplete} />
      <FormArticle formActions={formActions} formState={formState} />
    </section>
  );
}
