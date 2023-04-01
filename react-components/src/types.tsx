import {
  FieldErrors,
  UseFormRegister,
  FieldValues,
  Path,
} from "react-hook-form";

export interface UserCardProps {
  name: string;
  lastName: string;
  birthDate: string;
  country: string;
  gender: string;
  image: string;
}

export interface FormInputs {
  firstName: string;
  lastName: string;
  date: string;
  country: string;
  gender: string;
  file: FileList | null;
  checkbox: boolean;
}

export interface FormProps {
  updateCards: (value: UserCardProps[]) => void;
  userCardList: UserCardProps[];
}

export interface InputProps<T extends FieldValues> {
  name: Path<T>;
  value?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

export interface SubmitInputProps {
  disabled?: boolean;
}

export interface SubmitMessageProps {
  open: boolean;
}

export interface cardProps {
  title: string;
  author: string;
  image: string;
  link: string;
  time: number;
  veg: boolean;
  raiting: number;
}
