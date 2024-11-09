import { Button } from "@chakra-ui/react";
import DynamicInput from "./components/DynamicComponents/DynamicInput";
import DynamicCheckbox from "./components/DynamicComponents/DynamicCheckbox";
import DynamicSelect from "./components/DynamicComponents/DynamicSelect";

export enum ComponentType  {
    Input = 'Input',
    Checkbox = 'Checkbox',
    Select = 'Select',
    Button = 'Button',
  };
  
  // Map each type to its corresponding component
  export const componentMap = {
    [ComponentType.Input]: DynamicInput,
    [ComponentType.Checkbox]: DynamicCheckbox,
    [ComponentType.Select]: DynamicSelect,
    [ComponentType.Button]: Button,
  };