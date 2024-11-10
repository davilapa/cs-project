import { VStack } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import DynamicInput from "./DynamicInput";
import DynamicCheckbox from "./DynamicCheckbox";
import DynamicSelect from "./DynamicSelect";
import DynamicButton from "./DynamicButton";
import { Component } from "../types/componentProps.types";

export default function DynamicForm({ components }: { components: Component[]}) {
  const methods = useForm();
  const {
    register,
    formState: { errors },
  } = methods;

  const renderComponent = (component) => {
    switch (component.type) {
      case "Input":
        return (
          <DynamicInput
            key={component.props.id}
            {...component.props}
            register={register}
            errors={errors}
          />
        );
      case "Checkbox":
        return (
          <DynamicCheckbox
            key={component.props.id}
            {...component.props}
            register={register}
          />
        );
      case "Select":
        return (
          <DynamicSelect
            key={component.props.id}
            {...component.props}
            register={register}
            errors={errors}
          />
        );
      case "Button":
        return (
          <DynamicButton
            key={component.props.id}
            {...component.props}
            onClick={component.props.handleClick}
            type="button"
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form>
        <VStack spacing={4} align="stretch">
          {components.map(renderComponent)}
        </VStack>
      </form>
    </FormProvider>
  );
}
