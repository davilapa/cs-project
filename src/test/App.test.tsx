import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import App from "../App";

vi.mock("react-router-dom", async () => {
  const actual = (await vi.importActual("react-router-dom")) as any;
  return {
    ...actual,
    BrowserRouter: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

vi.mock("../pages/HomePage", () => ({
  default: vi.fn(() => <div data-testid="home-page">Home Page</div>),
}));
vi.mock("../pages/ConfirmationPage", () => ({
  default: vi.fn(() => (
    <div data-testid="confirmation-page">Confirmation Page</div>
  )),
}));

describe("App Component Routing", () => {
  it('should renders HomePage on the root route ("/")', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });

  it('should renders ConfirmationPage on the "/confirmation" route', () => {
    render(
      <MemoryRouter initialEntries={["/confirmation"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Confirmation Page/i)).toBeInTheDocument();
  });
});
