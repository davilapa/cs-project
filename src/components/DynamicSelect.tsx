import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  SelectProps,
} from "@chakra-ui/react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Option } from "../types/componentProps.types";

interface DynamicSelectProps extends SelectProps {
  id: string;
  label: string;
  options: Option[],
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

export default function DynamicSelect({
  id,
  label,
  placeholder,
  options,
  isRequired,
  register,
  errors,
}: DynamicSelectProps) {
  return (
    <FormControl isRequired={isRequired} isInvalid={Boolean(errors[id])}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Select
        id={id}
        placeholder={placeholder}
        {...register(id, { required: isRequired })}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <FormErrorMessage>{errors[id] && String(errors[id].message)}</FormErrorMessage>
    </FormControl>
  );
}
