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
}

export interface CheckboxProps extends Prop {
  isChecked: boolean;
}

export interface SelectProps extends Prop {
  placeholder: string;
  options: Option[];
}

export interface ButtonProps extends Prop {
  variant: string;
  onClick: string;
}

export interface Option {
  value: string;
  label: string;
}
