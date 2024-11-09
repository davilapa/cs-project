import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";

export default function DynamicSelect({
  id,
  label,
  placeholder,
  options,
  isRequired,
  register,
  errors,
}: any) {
  return (
    <FormControl isRequired={isRequired} isInvalid={errors[id]}>
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
      <FormErrorMessage>{errors[id] && errors[id].message}</FormErrorMessage>
    </FormControl>
  );
}
