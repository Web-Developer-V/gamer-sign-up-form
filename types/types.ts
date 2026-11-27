// export type InputType = Pick<FormInputProps, "id" | "name" | "placeholder" | "type" | "inputValue" | "isValid" | "hasSubmitted" | "autoComplete" | "compositionEnd" | "change">;

export type PasswordLevelType = "weak" | "fair" | "good" | "strong";

export type FormFieldKey = "callsign" | "email" | "password" | "confirm_password";

export type IsValidType = Record<FormFieldKey, boolean> & {
  termsChecked: boolean;
};

export type InputValueType = Record<FormFieldKey, string>;

export interface VerifiedListItemProps {
  children: React.ReactNode;
  className?: string;
}

export interface VerifiedListItemTitleProps {
  title: string;
}

export interface FormStateProps {
  isComplete: boolean;
  validateValue: InputValueType;
  isValid: IsValidType;
  passwordLevel: PasswordLevelType | undefined;
  hasAttemptedSubmit: boolean;
}

export interface FormActionsProps {
  validate: (id: string, value: string) => void;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  compositionEndHandler: (e: React.CompositionEvent<HTMLInputElement>) => void;
  toggleTermsHandler: () => void;
  completeFormHandler: (state: boolean) => void;
  resetFormHandler: () => void;
  setAttemptedSubmitHandler: (state: boolean) => void;
}

export interface FormArticleProps {
  formState: FormStateProps;
  formActions: FormActionsProps;
}

export interface FormInputProps {
  label: string;
  id: string;
  name: string;
  description?: string;
  placeholder?: string;
  autoComplete?: string;
  inputValue: string;
  type?: React.HTMLInputTypeAttribute;
  isValid: boolean;
  hasAttemptedSubmit: boolean;
  isChecked?: boolean;
  passwordLevel?: PasswordLevelType;
  showPassword?: {
    password: boolean;
    confirm_password: boolean;
  };
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  compositionEnd: (e: React.CompositionEvent<HTMLInputElement>) => void;
  toggleShowPassword?: (id: "password" | "confirm_password") => void;
}

export interface InputProps {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  inputValue: string;
  isValid: boolean;
  hasAttemptedSubmit: boolean;
  compositionEnd: (e: React.CompositionEvent<HTMLInputElement>) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface VerifiedStatusArticleProps {
  isValid: FormStateProps["isValid"];
  validateValue?: FormStateProps["validateValue"];
  isComplete: FormStateProps["isComplete"];
  hasAttemptedSubmit: FormStateProps["hasAttemptedSubmit"];
}

export interface VerifiedStatusTextProps {
  isValid: boolean;
  validateValue?: string;
  notValidText: string;
  isComplete: FormStateProps["isComplete"];
  hasAttemptedSubmit: FormStateProps["hasAttemptedSubmit"];
}

export interface HandShakeCompleteProps {
  validateValue: FormStateProps["validateValue"];
  reset: FormActionsProps["resetFormHandler"];
  setAttemptedSubmitHandler: FormActionsProps["setAttemptedSubmitHandler"];
  setShouldAnimateText: (state: boolean) => void;
}

export interface FormInputFieldsProps {
  name: FormFieldKey;
  id: FormFieldKey;
  label: string;
  type: React.HTMLInputTypeAttribute;
  description?: string;
  placeholder?: string;
  autoComplete?: string;
  passwordLevel?: PasswordLevelType;
}
