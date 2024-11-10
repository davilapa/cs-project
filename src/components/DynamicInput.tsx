import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface DynamicInputProps extends InputProps {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

export default function DynamicInput({
  id,
  label,
  placeholder,
  isRequired,
  register,
  errors,
}: DynamicInputProps) {
  return (
    <FormControl isRequired={isRequired} isInvalid={Boolean(errors[id])}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        id={id}
        placeholder={placeholder}
        {...register(id, { required: isRequired })}
      />
      <FormErrorMessage>{errors[id] && String(errors[id].message)}</FormErrorMessage>
    </FormControl>
  );
}
