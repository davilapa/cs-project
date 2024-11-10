import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface Response {
  components: Component[];
}

export interface Component {
  type: string;
  props: Props;
}

export type Props = InputProps | CheckboxProps | SelectProps | ButtonProps;

export interface Prop {
  id: string;
  label: string;
}

export interface InputProps extends Prop {
  placeholder: string;
  isRequired: boolean;
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

export interface CheckboxProps extends Prop {
  isChecked: boolean;
  register: UseFormRegister<FieldValues>
}

export interface SelectProps extends Prop {
  placeholder: string;
  options: Option[];
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

export interface ButtonProps extends Prop {
  variant: string;
  onClick: string;
  handleClick?: (e: any) => void
}

export interface Option {
  value: string;
  label: string;
}

export interface ConfirmData {
  firstName: string,
  subscribe: boolean,
  lastName: string,
  country: string,
}