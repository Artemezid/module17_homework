import { reverseString } from "../3functions.js";

    describe("tests for revertString function", () => {
        it("should reverse string", () => expect(reverseString("abc")).toBe("cba"));
    });

import { match } from "../3functions.js";

    describe("test of equal strings", () => {
        it ("test of correct comparison of strings", () => {
            expect(match('Hello','hELlo')).toBe(true),
            expect(match('proxy','hELlo')).toBe(false);
            })
        it ("test of correct comparison of strings", () =>{
            expect(match('hELlo','hELlo')).toBe(false);
            })
});

import {multiply} from'../3functions.js';
    describe('test 2', () =>{
        it('adds 1 * 0 to equal 1', () => {
            expect(multiply(1, 0)).toBe(0);
    }),
        it('adds 1 * 0 to equal 1', () => {
            expect(multiply(1, 0)).toBe(0);
    });
});



