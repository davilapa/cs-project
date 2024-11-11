import { render, screen } from "@testing-library/react";
import DynamicInput from "../DynamicInput";
import { describe, it, expect, vi } from "vitest";

describe("DynamicInput", () => {
  it("should renders correctly", () => {
    const mockRegister = vi.fn();
    const mockErrors = {};

    render(
      <DynamicInput
        id="testInput"
        label="Test Label"
        placeholder="Test Placeholder"
        isRequired={true}
        register={mockRegister}
        errors={mockErrors}
      />
    );

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Test Placeholder")).toBeInTheDocument();
  });

  it("should shows error message when there is an error", () => {
    const mockRegister = vi.fn();
    const mockErrors = {
      testInput: { message: "This field is required" },
    };

    render(
      <DynamicInput
        id="testInput"
        label="Test Label"
        placeholder="Test Placeholder"
        isRequired={true}
        register={mockRegister}
        errors={mockErrors}
      />
    );

    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });
});
