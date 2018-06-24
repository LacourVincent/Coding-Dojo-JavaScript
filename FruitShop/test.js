const { FruitShop } = require("./core");
const assert = require("assert");

describe("Test of the FruitShop Module", () => {
    it("should return the unit price of Pommes", () => {
        const shop = new FruitShop();
        assert.equal(shop.doSomeThings("Pommes"), 100);
    });

    it("should return the unit price of Cerises", () => {
        const shop = new FruitShop();
        assert.equal(shop.doSomeThings("Cerises"), 75);
    });

    it("should return the unit price of Bananes", () => {
        const shop = new FruitShop();
        assert.equal(shop.doSomeThings("Bananes"), 150);
    });

    it("should test the command of the final iteration 1", () => {
        const shop = new FruitShop();
        assert.equal(shop.doSomeThings("Mele,Apples,Apples,Mele"), 200);
    });

    it("should test the command of the final iteration 2", () => {
        const shop = new FruitShop();
        assert.equal(shop.doSomeThings("Mele,Apples,Apples,Pommes,Mele"), 100);
    });

    it("should test the command of the final iteration 3", () => {
        const shop = new FruitShop();
        assert.equal(shop.doSomeThings("Mele,Apples,Apples,Pommes,Mele"), 100);
        assert.equal(shop.doSomeThings("Bananes"), 350);
    });
});
