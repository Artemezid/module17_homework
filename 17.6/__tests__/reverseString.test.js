import { reverseString } from "../reverseString.js";

xdescribe("tests for revertString function", () => {
  it("should reverse string", () => expect(reverseString("abc")).toBe("cba"));
});