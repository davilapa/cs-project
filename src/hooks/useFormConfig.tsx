import { useEffect, useState } from "react";
import { Component } from "../types/componentProps.types";
import { fetchFormConfig } from "../services/api";
import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import { useConfirmDataStore } from "../store/useConfirmDataStore";

export const useFormConfig = () => {
  const [formConfig, setFormConfig] = useState<Component[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setConfirmData } = useConfirmDataStore((state) => state)

  useEffect(() => {
    getFormConfig();
  }, []);

  const handleSave = async (formData: FieldValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setConfirmData(formData)
      navigate("/confirmation");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onClickMapper = {
    handleSave,
  };

  const defaultHandler = () => console.log("Handler no definido");

  const getFormConfig = async () => {
    try {
      setIsLoading(true)
      const resp = await fetchFormConfig();

      const newComponents = resp.components.map((component) => {
        const { type, props } = component;
        if (type !== "Button") return component;

        const onClickKey = props.onClick;
        const newComponent = structuredClone(component);
        newComponent.props.handleClick =
          onClickMapper[onClickKey] || defaultHandler;
        return newComponent;
      });

      setFormConfig(newComponents);
    } catch (error) {
      console.error("Error obteniendo configuración del formulario", error);
    } finally {
      setIsLoading(false)
    }
  };

  return {
    formConfig,
    isLoading
  };
};
