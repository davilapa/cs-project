import { Button, ButtonProps } from "@chakra-ui/react";
import { FieldValues, useFormContext } from "react-hook-form";

interface DynamicButtonProps extends ButtonProps {
  id: string;
  label: string;
  onClick: (values: FieldValues) => void;
}

export default function DynamicButton({
  id,
  label,
  onClick,
  ...props
}: DynamicButtonProps) {
  const { getValues } = useFormContext();
  const handleClick = () => {
    const values = getValues();
    onClick(values);
  };

  return (
    <Button id={id} onClick={handleClick} colorScheme="blue" {...props}>
      {label}
    </Button>
  );
}
