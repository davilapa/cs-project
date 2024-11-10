import { Checkbox, CheckboxProps } from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";


interface DynamicCheckboxProps extends CheckboxProps {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>
}

export default function DynamicCheckbox({
  id,
  label,
  isChecked,
  register,
}: DynamicCheckboxProps) {
  return (
    <Checkbox id={id} defaultChecked={isChecked} {...register(id)}>
      {label}
    </Checkbox>
  );
}
