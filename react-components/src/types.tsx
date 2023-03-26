export interface userCardProps {
  name: string;
  lastName: string;
  birthDate: string;
  country: string;
  gender: string;
  image: string;
}

export type FormPageProps = {
  [key: string]: never;
};

export interface FormPageState {
  userCardList: userCardProps[];
}

export interface FormProps {
  handleSubmit: (value: userCardProps[]) => void;
  userCardList: userCardProps[];
}

export interface FormState {
  isFormValid: boolean;
  isOpen: boolean;
  nameError: boolean;
  lastNameError: boolean;
  birthError: boolean;
  countryError: boolean;
  genderError: boolean;
  imageError: boolean;
  checkError: boolean;
}

export interface textInputProps {
  name: string;
  propRef: React.RefObject<HTMLInputElement>;
  showError: boolean;
}

export interface CheckboxInputProps {
  label: string;
  propRef: React.RefObject<HTMLInputElement>;
  showError: boolean;
}

export interface InputProps {
  propRef: React.RefObject<HTMLInputElement>;
  showError: boolean;
}

export interface radioInputProps {
  name: string;
  propRef: React.RefObject<HTMLInputElement>;
}

export interface selectInputProps {
  propRef: React.RefObject<HTMLSelectElement>;
  showError: boolean;
}

export interface submitInputProps {
  disabled?: boolean;
  handleClick: () => void;
}

export interface submitMessageProps {
  open: boolean;
}
