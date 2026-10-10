import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility function", () => {
  it("should merge simple class names correctly", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("should merge conflicting tailwind classes using tailwind-merge precedence", () => {
    expect(cn("px-4", "px-6")).toBe("px-6");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
    expect(cn("p-4", "p-2")).toBe("p-2");
  });

  it("should handle conditional and falsy arguments cleanly", () => {
    const isHidden = false;
    const isVisible = true;
    expect(cn("base-class", isHidden && "hidden", isVisible && "block", null, undefined, false)).toBe(
      "base-class block"
    );
  });

  it("should handle object syntax and arrays", () => {
    expect(cn(["btn", "btn-primary"], { active: true, disabled: false })).toBe(
      "btn btn-primary active"
    );
  });
});
