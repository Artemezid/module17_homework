import { match } from "../sravnenieStrok";

xdescribe("test of equal strings", () => {
    it ("test of correct comparison of strings", () => {
        expect(match('Hello','hELlo')).toBe(true),
        expect(match('proxy','hELlo')).toBe(false);
        })
    it ("test of correct comparison of strings", () =>{
        expect(match('hELlo','hELlo')).toBe(false);
        })
});