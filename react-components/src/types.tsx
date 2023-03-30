import { FieldValues, UseFormRegister } from "react-hook-form";

export interface userCardProps {
  name: string;
  lastName: string;
  birthDate: string;
  country: string;
  gender: string;
  image: string;
}

// export interface FormInputs {
//   firstName: string;
//   lastName: string;
//   date: Date;
//   country: string;
//   gender: string;
//   image: FileList;
//   checkbox: boolean;
// }

export interface FormProps {
  handleSubmit: (value: userCardProps[]) => void;
  userCardList: userCardProps[];
}

export interface InputProps {
  name?: string;
  register: UseFormRegister<FieldValues>;
}

export interface submitInputProps {
  disabled?: boolean;
  handleClick: () => void;
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
