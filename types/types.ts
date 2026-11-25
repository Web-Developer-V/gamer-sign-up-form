export type InputType = Pick<FormInputProps, "id" | "name" | "placeholder" | "type" | "inputValue" | "isValid" | "hasSubmitted" | "autoComplete" | "compositionEnd" | "change">;

export type PasswordLevelType = "weak" | "fair" | "good" | "strong";

export type FormFieldKey = "callsign" | "email" | "password" | "confirm_password";

export type IsValidType = Record<FormFieldKey, boolean> & {
  termsChecked: boolean;
};

export type InputValueType = Record<FormFieldKey, string>;

export interface VerifiedListItemProps {
  children: React.ReactNode;
}

export interface VerifiedListItemTitleProps {
  title: string;
}

export interface FormArticleProps {
  isValid: IsValidType;
  validateValue: InputValueType;
  passwordLevel?: PasswordLevelType;
  isComplete: boolean;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  compositionEnd: (e: React.CompositionEvent<HTMLInputElement>) => void;
  setIsValid: React.Dispatch<React.SetStateAction<IsValidType>>;
  setValidateValue: React.Dispatch<React.SetStateAction<InputValueType>>;
  setIsComplete: (state: boolean) => void;
  setPasswordLevel: React.Dispatch<React.SetStateAction<PasswordLevelType | undefined>>;
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
  hasSubmitted: boolean;
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

export interface VerifiedStatusArticleProps {
  isValid: FormArticleProps["isValid"];
  validateValue?: FormArticleProps["validateValue"];
  isComplete: FormArticleProps["isComplete"];
}

export interface VerifiedStatusTextProps {
  isValid: boolean;
  notValidText: string;
  validateValue?: string;
  isComplete: FormArticleProps["isComplete"];
}

export interface HandShakeCompleteProps {
  validateValue: FormArticleProps["validateValue"];
  setIsComplete: (state: boolean) => void;
  setValidateValue: FormArticleProps["setValidateValue"];
  setIsValid: FormArticleProps["setIsValid"];
  setHasSubmitted: (state: boolean) => void;
  setPasswordLevel: FormArticleProps["setPasswordLevel"];
  setShouldAnimateText: (state: boolean) => void;
}

export interface FormInputFieldsProps {
  name: FormFieldKey;
  id: FormFieldKey;
  label: string;
  description?: string;
  placeholder?: string;
  autoComplete?: string;
  passwordLevel?: PasswordLevelType;
  type: React.HTMLInputTypeAttribute;
}
