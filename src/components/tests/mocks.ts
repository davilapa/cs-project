import { Component } from "../../types/componentProps.types";

export const componentsOkMock = [
    {
      type: "Input",
      props: {
        id: "firstName",
        label: "Nombre",
        placeholder: "Ingrese su nombre",
        isRequired: true,
      },
    },
    {
      type: "Checkbox",
      props: {
        id: "subscribe",
        label: "Suscribirse al boletín",
        isChecked: false,
      },
    },
    {
      type: "Input",
      props: {
        id: "lastName",
        label: "Apellido",
        placeholder: "Ingrese su apellido",
        isRequired: true,
      },
    },
    {
      type: "Select",
      props: {
        id: "country",
        label: "País",
        placeholder: "Seleccione su país",
        options: [
          { value: "colombia", label: "Colombia" },
          { value: "mexico", label: "México" },
          { value: "argentina", label: "Argentina" },
        ],
      },
    },
    {
      type: "Button",
      props: {
        id: "save",
        label: "Guardar",
        variant: "solid",
        onClick: "handleSave",
      },
    },
  ] as Component[];