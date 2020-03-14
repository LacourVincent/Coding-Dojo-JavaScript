const karateShop = require("./index");

describe("KarateShop", () => {
  it("should return -1 with empty array", () => {
    expect(karateShop(3, [])).toBe(-1);
  });

  it("should return -1 when the value is not found", () => {
    expect(karateShop(1, [0, 0, 0, 0, 0])).toBe(-1);
  });

  it("should return the index of the value", () => {
    expect(karateShop(1, [0, 0, 1, 0, 0])).toBe(2);
  });
});
