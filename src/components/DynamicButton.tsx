import { Button, ButtonProps } from "@chakra-ui/react";
import { FieldValues, useFormContext, UseFormTrigger } from "react-hook-form";

interface DynamicButtonProps extends ButtonProps {
  id: string;
  label: string;
  onClick: (values: FieldValues) => void;
  trigger: UseFormTrigger<FieldValues>
}

export default function DynamicButton({
  id,
  label,
  onClick,
  trigger,
  ...props
}: DynamicButtonProps) {
  const { getValues } = useFormContext();
  const handleClick = async () => {
    const isValid = await trigger();
    if (isValid) {
      const values = getValues();
      onClick(values);
    }
  };

  return (
    <Button id={id} onClick={handleClick} colorScheme="blue" {...props}>
      {label}
    </Button>
  );
}
