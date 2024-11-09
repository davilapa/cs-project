import { Button, ButtonProps } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface DynamicButtonProps extends ButtonProps {
  id: string;
  label: string;
  onClick?: (values: any) => void;
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
    <Button id={id} onClick={handleClick} {...props}>
      {label}
    </Button>
  );
}
