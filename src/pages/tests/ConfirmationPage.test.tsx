import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ConfirmationPage from "../ConfirmationPage";
import { useConfirmDataStore } from "../../store/useConfirmDataStore";
import { mockConfirmData } from "./mocks";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

vi.mock("../../store/useConfirmDataStore");

describe("ConfirmationPage", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should renders ConfirmationNotData when confirmData is null", () => {
    (useConfirmDataStore as any).mockImplementation((selector) =>
      selector({ confirmData: null })
    );

    render(<ConfirmationPage />);
    expect(
      screen.getByText("No hay información de formulario disponile")
    ).toBeInTheDocument();
  });

  it("should renders confirmation details when confirmData is available", () => {
    (useConfirmDataStore as any).mockImplementation((selector) =>
      selector({ confirmData: mockConfirmData })
    );

    render(<ConfirmationPage />);

    expect(
      screen.getByRole("heading", { name: /confirmación/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/su información ha sido guardada exitosamente/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/name:/i)).toBeInTheDocument();
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
  });

  it("should navigates back to the form when button is clicked", () => {
    (useConfirmDataStore as any).mockImplementation((selector) =>
      selector({ confirmData: mockConfirmData })
    );
    render(<ConfirmationPage />);

    const button = screen.getByRole("button", {
      name: /volver al formulario/i,
    });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("should renders all confirmData entries", () => {
    (useConfirmDataStore as any).mockImplementation((selector) =>
      selector({ confirmData: mockConfirmData })
    );

    render(<ConfirmationPage />);

    Object.entries(mockConfirmData).forEach(([key, value]) => {
      expect(screen.getByText(new RegExp(`${key}:`, "i"))).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(value.toString(), "i"))
      ).toBeInTheDocument();
    });
  });
});
