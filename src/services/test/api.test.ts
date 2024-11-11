import { describe, it, expect, vi } from "vitest";
import { fetchFormConfig } from "../api";

describe("Api Tests", () => {
  describe("fetchFormConfig", () => {
    it("should returns the correct form configuration", async () => {
      // Use fake timers to skip the 2000ms delay
      vi.useFakeTimers();

      // Call fetchFormConfig, which will return a promise
      const fetchPromise = fetchFormConfig();

      // Run all timers to resolve the setTimeout immediately
      vi.runAllTimers();

      // Await the result of the fetch function
      const result = await fetchPromise;

      // Validate the structure of the returned data
      expect(result).toHaveProperty("components");
      expect(result.components).toHaveLength(5);

      // Check the first component
      expect(result.components[0]).toMatchObject({
        type: "Input",
        props: {
          id: "firstName",
          label: "Nombre",
          placeholder: "Ingrese su nombre",
          isRequired: true,
        },
      });

      // Check the last component
      expect(result.components[4]).toMatchObject({
        type: "Button",
        props: {
          id: "save",
          label: "Guardar",
          variant: "solid",
          onClick: "handleSave",
        },
      });

      // Clear mock timers to avoid affecting other tests
      vi.useRealTimers();
    });
  });
});
