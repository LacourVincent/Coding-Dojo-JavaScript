const FruitShop = require("./index");

describe("FruitShop", () => {
  it("should return 100 - unit price of Pommes", () => {
    const shop = new FruitShop();
    expect(shop.getFacture("Pommes")).toBe(100);
  });

  it("should return 100 - unit price of Mele", () => {
    const shop = new FruitShop();
    expect(shop.getFacture("Mele")).toBe(100);
  });

  it("should return 100 - unit price of Apples", () => {
    const shop = new FruitShop();
    expect(shop.getFacture("Apples")).toBe(100);
  });

  it("should return 75 - unit price of Cerises", () => {
    const shop = new FruitShop();
    expect(shop.getFacture("Cerises")).toBe(75);
  });

  it("should return 150 - unit price of Bananes", () => {
    const shop = new FruitShop();
    expect(shop.getFacture("Bananes")).toBe(150);
  });

  it("should return 200 - test the command of the final iteration 1", () => {
    const shop = new FruitShop();
    expect(shop.getFacture("Mele,Apples,Apples,Mele")).toBe(200);
  });

  it("should return 100 - test the command of the final iteration 2", () => {
    const shop = new FruitShop();
    expect(shop.getFacture("Mele,Apples,Apples,Pommes,Mele")).toBe(100);
  });

  it("should return 100 then 350 - test the command of the final iteration 3", () => {
    const shop = new FruitShop();
    expect(shop.getFacture("Mele,Apples,Apples,Pommes,Mele")).toBe(100);
    expect(shop.getFacture("Bananes")).toBe(350);
  });
});
