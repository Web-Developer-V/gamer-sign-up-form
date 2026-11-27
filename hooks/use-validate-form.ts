"use client";

import { useState } from "react";

import type { PasswordLevelType } from "@/types/types";

export default function useValidateForm() {
  const [validateValue, setValidateValue] = useState({
    callsign: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [isValid, setIsValid] = useState({
    callsign: false,
    email: false,
    password: false,
    confirm_password: false,
    termsChecked: false,
  });
  const [passwordLevel, setPasswordLevel] = useState<PasswordLevelType | undefined>(undefined);
  const [isComplete, setIsComplete] = useState(false);
  const [hasAttemptedSubmit, setAttemptedSubmit] = useState(false);

  const validate = (id: string, value: string) => {
    const callSignRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordUppercaseRegex = /[A-Z]/;
    const passwordSymbolRegex = /[^A-Za-z0-9\s]/;

    const filteredValue = id === "callsign" ? value.replace(/[^a-zA-Z0-9_-]/g, "") : id === "email" ? value.replace(/[^\x21-\x7E]/g, "") : value;

    const nextValidateValue = {
      ...validateValue,
      [id]: filteredValue,
    };
    setValidateValue(nextValidateValue);

    const newIsValid = {
      callsign: nextValidateValue.callsign.trim() !== "" && callSignRegex.test(nextValidateValue.callsign),
      email: nextValidateValue.email.trim() !== "" && emailRegex.test(nextValidateValue.email),
      password: nextValidateValue.password.trim() !== "" && nextValidateValue.password.length >= 8,
      confirm_password: nextValidateValue.password.length > 0 && nextValidateValue.password === nextValidateValue.confirm_password,
      termsChecked: !!isValid.termsChecked,
    };

    setIsValid(newIsValid);

    const password = nextValidateValue.password;
    const hasUppercase = passwordUppercaseRegex.test(password);
    const hasSymbol = passwordSymbolRegex.test(password);

    if (password.length === 0) {
      setPasswordLevel(undefined);
    } else if (newIsValid.password && hasUppercase && hasSymbol && password.length >= 12) {
      setPasswordLevel("strong");
    } else if (newIsValid.password && hasUppercase && hasSymbol) {
      setPasswordLevel("good");
    } else if (newIsValid.password && (hasUppercase || hasSymbol)) {
      setPasswordLevel("fair");
    } else {
      setPasswordLevel("weak");
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if ((e.nativeEvent as InputEvent).isComposing) {
      setValidateValue((prev) => ({
        ...prev,
        [id]: value,
      }));

      return;
    }

    validate(id, value);
  };

  const compositionEndHandler = (e: React.CompositionEvent<HTMLInputElement>) => {
    validate(e.currentTarget.id, e.currentTarget.value);
  };

  const toggleTermsHandler = () => {
    setIsValid((prev) => ({
      ...prev,
      termsChecked: !prev.termsChecked,
    }));
  };

  const completeFormHandler = (state: boolean) => {
    setIsComplete(state);
  };

  const setAttemptedSubmitHandler = (state: boolean) => {
    setAttemptedSubmit(state);
  };

  const resetFormHandler = () => {
    setIsComplete(false);

    setValidateValue({
      callsign: "",
      email: "",
      password: "",
      confirm_password: "",
    });

    setIsValid({
      callsign: false,
      email: false,
      password: false,
      confirm_password: false,
      termsChecked: false,
    });

    setPasswordLevel(undefined);
  };

  return {
    formActions: {
      validate,
      changeHandler,
      compositionEndHandler,
      toggleTermsHandler,
      completeFormHandler,
      resetFormHandler,
      setAttemptedSubmitHandler,
    },
    formState: {
      isComplete,
      validateValue,
      isValid,
      passwordLevel,
      hasAttemptedSubmit,
    },
  };
}
