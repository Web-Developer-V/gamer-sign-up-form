"use client";

import { useState } from "react";

import useValidateForm from "@/hooks/use-validate-form";
import FormArticle from "./form-article";
import VerifiedStatusArticle from "./verified-status-article";

export default function FormSection() {
  const { changeHandler, compositionEndHandler, setIsValid, setValidateValue, setPasswordLevel, isValid, validateValue, passwordLevel } = useValidateForm();

  const [isComplete, setIsComplete] = useState(false);

  return (
    <section className="flex gap-x-20 items-center w-full h-full max-w-280 mx-auto py-20">
      <VerifiedStatusArticle isValid={isValid} validateValue={validateValue} isComplete={isComplete} />
      <FormArticle
        change={changeHandler}
        compositionEnd={compositionEndHandler}
        setIsValid={setIsValid}
        setValidateValue={setValidateValue}
        setPasswordLevel={setPasswordLevel}
        setIsComplete={setIsComplete}
        isValid={isValid}
        validateValue={validateValue}
        passwordLevel={passwordLevel}
        isComplete={isComplete}
      />
    </section>
  );
}
