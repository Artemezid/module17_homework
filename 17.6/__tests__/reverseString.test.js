import { reverseString } from "../reverseString.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(reverseString("abc")).toBe("cba"));
});