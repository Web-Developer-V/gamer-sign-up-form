export interface verifiedListItemProps {
  children: React.ReactNode;
}

export interface verifiedListItemTitleProps {
  title: string;
}

export interface formArticleProps {
  isValid: IsValid;
  validateValue: {
    callsign: string;
    email: string;
    password: string;
    confirm_password: string;
  };
  passwordLevel?: PasswordLevel;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  compositionEnd: (e: React.CompositionEvent<HTMLInputElement>) => void;
  setIsValid: React.Dispatch<React.SetStateAction<IsValid>>;
}

export interface inputProps {
  label: string;
  id: string;
  name: string;
  description?: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  isChecked: boolean;
  inputValue: string;
  inputType?: React.HTMLInputTypeAttribute;
  isValid: boolean;
  passwordLevel?: PasswordLevel;
  showPassWord?: {
    password: boolean;
    confirm_password: boolean;
  };
  isSubmitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<SubmittedState>>;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  compositionEnd: (e: React.CompositionEvent<HTMLInputElement>) => void;
  toggleShowPassword?: (id: "password" | "confirm_password") => void;
}

export type input = Pick<inputProps, "id" | "name" | "placeholder" | "inputType" | "inputValue" | "isValid" | "isSubmitted" | "setSubmitted" | "autoComplete" | "compositionEnd" | "change">;

export type PasswordLevel = "week" | "fair" | "good" | "strong";

export type IsValid = {
  callsign: boolean;
  email: boolean;
  password: boolean;
  confirm_password: boolean;
  termsCheck: boolean;
};

export type SubmittedState = {
  callsign: boolean;
  email: boolean;
  password: boolean;
  confirm_password: boolean;
  termsCheck: boolean;
};
