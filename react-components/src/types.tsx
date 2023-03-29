export interface userCardProps {
  name: string;
  lastName: string;
  birthDate: string;
  country: string;
  gender: string;
  image: string;
}

export interface FormProps {
  handleSubmit: (value: userCardProps[]) => void;
  userCardList: userCardProps[];
}

// export interface FormState {
//   isFormValid: boolean;
//   isOpen: boolean;
//   nameError: boolean;
//   lastNameError: boolean;
//   birthError: boolean;
//   countryError: boolean;
//   genderError: boolean;
//   imageError: boolean;
//   checkError: boolean;
// }

export interface textInputProps {
  name: string;
  showError: boolean;
}

export interface CheckboxInputProps {
  label: string;
  showError: boolean;
}

export interface InputProps {
  showError: boolean;
}

export interface radioInputProps {
  name: string;
}

export interface selectInputProps {
  showError: boolean;
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
