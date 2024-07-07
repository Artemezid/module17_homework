import {simplenumber} from "../simplenumber.js";


describe ("test for prime function", () => {
    it ("correct work with simple, complex & invalid numbers", () => {
        expect(simplenumber(17)).toBe("число 17 - простое"),
        expect(simplenumber(18)).toBe("число 18 - составное"),
        expect(simplenumber(1001)).toBe("данные не верны");
    });
});