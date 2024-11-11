import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import HomePage from "../HomePage";
import { useFormConfig } from "../../hooks/useFormConfig";
import { componentsOkMock } from "../../components/tests/mocks";

vi.mock("../../hooks/useFormConfig", () => ({
  useFormConfig: vi.fn(),
}));

vi.mock("../../components/DynamicForm", () => ({
  default: vi.fn(() => <div data-testid="dynamic-form">Dynamic Form</div>),
}));

describe("HomePage", () => {
  it("should renders the heading correctly", () => {
    (useFormConfig as any).mockReturnValue({
      formConfig: [],
      isLoading: false,
    });
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { name: /formulario dinámico/i })
    ).toBeInTheDocument();
  });

  it("should displays loading component when isLoading", () => {
    (useFormConfig as any).mockReturnValue({ formConfig: [], isLoading: true });
    render(<HomePage />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should does not display loading component when isLoading is false", () => {
    (useFormConfig as any).mockReturnValue({
      formConfig: [],
      isLoading: false,
    });
    render(<HomePage />);
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  it("should renders DynamicForm component with correct props", () => {
    (useFormConfig as any).mockReturnValue({
      formConfig: componentsOkMock,
      isLoading: false,
    });
    render(<HomePage />);
    expect(screen.getByTestId("dynamic-form")).toBeInTheDocument();
  });
});
