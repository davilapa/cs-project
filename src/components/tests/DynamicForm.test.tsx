import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DynamicForm from "../DynamicForm";
import { componentsOkMock } from "./mocks";

describe("DynamicForm", () => {
  it("should renders with components correctly", () => {
    render(<DynamicForm components={componentsOkMock} />);
    expect(screen.getByText("Nombre")).toBeInTheDocument();
    expect(screen.getByText("Suscribirse al boletín")).toBeInTheDocument();
    expect(screen.getByText("Apellido")).toBeInTheDocument();
    expect(screen.getByText("País")).toBeInTheDocument();
    expect(screen.getByText("Seleccione su país")).toBeInTheDocument();
    expect(screen.getByText("Guardar")).toBeInTheDocument();
  });
});
