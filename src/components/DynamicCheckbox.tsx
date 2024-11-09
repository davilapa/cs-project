import { Checkbox } from "@chakra-ui/react";

export default function DynamicCheckbox({
  id,
  label,
  isChecked,
  register,
}: any) {
  return (
    <Checkbox id={id} defaultChecked={isChecked} {...register(id)}>
      {label}
    </Checkbox>
  );
}
