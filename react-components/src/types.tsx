import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface userCardProps {
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
  updateCards: (value: userCardProps[]) => void;
  userCardList: userCardProps[];
}

export interface InputProps {
  name?: string;
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
}

export interface submitInputProps {
  disabled?: boolean;
}

export interface submitMessageProps {
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
