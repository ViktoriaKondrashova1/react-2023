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

export interface CharacterProps {
  id?: number;
  name: string;
  image: string;
  status: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: { name: string; url: string };
  location?: { name: string; url: string };
  created?: string;
  episode?: string[];
  url?: string;
}

export interface CardProps extends CharacterProps {
  handleClick: () => void;
}

export interface CardListProps {
  data: CharacterProps[];
}

export interface SearchBarProps {
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface ModalProps {
  data: CharacterProps;
  isOpen: boolean;
  handleClick: () => void;
}

export interface SearchState {
  searchValue: { value: string };
}

export interface MainCardsState {
  mainCardsList: { cards: CharacterProps[] | null };
}

export interface FormCardsState {
  formCardsList: { cards: UserCardProps[] };
}
