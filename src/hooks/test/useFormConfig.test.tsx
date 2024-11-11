import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useFormConfig } from "../useFormConfig";
import { fetchFormConfig } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useConfirmDataStore } from "../../store/useConfirmDataStore";

vi.mock("../../services/api", () => ({
  fetchFormConfig: vi.fn(),
}));

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));

vi.mock("../../store/useConfirmDataStore", () => ({
  useConfirmDataStore: vi.fn(),
}));

describe("useFormConfig", () => {
  const mockNavigate = vi.fn();
  const mockSetConfirmData = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
    (useNavigate as any).mockReturnValue(mockNavigate);
    (useConfirmDataStore as any).mockImplementation((selector) =>
      selector({ setConfirmData: mockSetConfirmData })
    );
  });

  it("should fetch form config on mount", async () => {
    const mockComponents = [{ type: "Input", props: { id: "test" } }];
    (fetchFormConfig as any).mockResolvedValue({ components: mockComponents });

    const { result } = renderHook(() => useFormConfig());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.formConfig).toEqual(mockComponents);
    expect(result.current.isLoading).toBe(false);
  });

  it("should handle errors when fetching form config", async () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    (fetchFormConfig as any).mockRejectedValue(new Error("API Error"));

    const { result } = renderHook(() => useFormConfig());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.formConfig).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error obteniendo configuración del formulario",
      expect.any(Error)
    );

    consoleErrorSpy.mockRestore();
  });

  it("should map onClick handlers for Button components", async () => {
    const mockComponents = [
      { type: "Button", props: { id: "save", onClick: "handleSave" } },
      { type: "Button", props: { id: "unknown", onClick: "unknownHandler" } },
    ];
    (fetchFormConfig as any).mockResolvedValue({ components: mockComponents });

    const { result } = renderHook(() => useFormConfig());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.formConfig[0].props.handleClick).toBeDefined();
    expect(result.current.formConfig[1].props.handleClick).toBeDefined();
    expect(result.current.formConfig[1].props.handleClick.name).toBe(
      "defaultHandler"
    );
  });

  it('should handle form submission correctly', async () => {
    const mockComponents = [{ type: 'Button', props: { id: 'save', onClick: 'handleSave' } }]
    ;(fetchFormConfig as any).mockResolvedValue({ components: mockComponents })

    const { result } = renderHook(() => useFormConfig())

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    const formData = { name: 'John Doe' }

    await act(async () => {
      await result.current.formConfig[0].props.handleClick(formData)
    })

    expect(mockSetConfirmData).toHaveBeenCalledWith(formData)
    expect(mockNavigate).toHaveBeenCalledWith('/confirmation')
  })

});
