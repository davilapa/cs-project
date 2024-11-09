import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export default function DynamicInput({
  id,
  label,
  placeholder,
  isRequired,
  register,
  errors,
}: any) {
  return (
    <FormControl isRequired={isRequired} isInvalid={errors[id]}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        id={id}
        placeholder={placeholder}
        {...register(id, { required: isRequired })}
      />
      <FormErrorMessage>{errors[id] && errors[id].message}</FormErrorMessage>
    </FormControl>
  );
}
