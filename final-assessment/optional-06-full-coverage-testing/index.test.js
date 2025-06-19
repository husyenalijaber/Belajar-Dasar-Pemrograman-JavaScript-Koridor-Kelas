import { describe, expect, it } from "bun:test";
import sum from "./index.js";

describe("Testing sum function with full coverage", () => {
  it("should return the sum of two positive numbers", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("should return 0 when one or both arguments are not numbers", () => {
    expect(sum("4", 5)).toBe(0);
    expect(sum(4, "5")).toBe(0);
    expect(sum("4", "5")).toBe(0);
    expect(sum(true, 5)).toBe(0);
    expect(sum(4, null)).toBe(0);
    expect(sum(undefined, 5)).toBe(0);
  });

  it("should return 0 when one or both numbers are negative", () => {
    expect(sum(-4, 5)).toBe(0);
    expect(sum(4, -5)).toBe(0);
    expect(sum(-4, -5)).toBe(0);
  });

  it("should return the sum when one or both numbers are zero", () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(4, 0)).toBe(4);
    expect(sum(0, 0)).toBe(0);
  });
});
