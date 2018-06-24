const { KarateShop } = require("./core");
const assert = require("assert");

describe("Test of the KarateShop Module", () => {
    const shop = new KarateShop();
    it("should test an empty array", () => {
        assert.equal(shop.run(3, []), -1);
    });

    it("should test an array of 1 element", () => {
        assert.equal(shop.run(1, [1]), 0);
        assert.equal(shop.run(0, [1]), -1);
        assert.equal(shop.run(2, [1]), -1);
    });

    it("should test an array of 2 elements", () => {
        assert.equal(shop.run(1, [1, 3]), 0);
        assert.equal(shop.run(3, [1, 3]), 1);
        assert.equal(shop.run(0, [1, 3]), -1);
        assert.equal(shop.run(2, [1, 3]), -1);
        assert.equal(shop.run(4, [1, 3]), -1);
    });

    it("should test an array of 3 elements", () => {
        assert.equal(shop.run(1, [1, 3, 5]), 0);
        assert.equal(shop.run(3, [1, 3, 5]), 1);
        assert.equal(shop.run(5, [1, 3, 5]), 2);
        assert.equal(shop.run(0, [1, 3, 5]), -1);
        assert.equal(shop.run(2, [1, 3, 5]), -1);
        assert.equal(shop.run(4, [1, 3, 5]), -1);
        assert.equal(shop.run(6, [1, 3, 5]), -1);
    });

    it("should test an array of 4 elements", () => {
        assert.equal(shop.run(1, [1, 3, 5, 7]), 0);
        assert.equal(shop.run(3, [1, 3, 5, 7]), 1);
        assert.equal(shop.run(5, [1, 3, 5, 7]), 2);
        assert.equal(shop.run(7, [1, 3, 5, 7]), 3);
        assert.equal(shop.run(0, [1, 3, 5, 7]), -1);
        assert.equal(shop.run(2, [1, 3, 5, 7]), -1);
        assert.equal(shop.run(4, [1, 3, 5, 7]), -1);
        assert.equal(shop.run(6, [1, 3, 5, 7]), -1);
        assert.equal(shop.run(8, [1, 3, 5, 7]), -1);
    });
});
