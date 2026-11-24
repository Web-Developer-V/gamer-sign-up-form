"use client";

import useValidateForm from "@/hooks/use-validate-form";

import FormArticle from "./form-article";
import VerifiedStatusArticle from "./verified-status-article";

export default function FormSection() {
  const { changeHandler, compositionEndHandler, setIsValid, isValid, validateValue, passwordLevel } = useValidateForm();

  return (
    <section className="flex gap-x-20 items-center w-full h-full max-w-280 mx-auto py-20">
      <VerifiedStatusArticle isValid={isValid} validateValue={validateValue} />
      <FormArticle change={changeHandler} compositionEnd={compositionEndHandler} setIsValid={setIsValid} isValid={isValid} validateValue={validateValue} passwordLevel={passwordLevel} />
    </section>
  );
}
