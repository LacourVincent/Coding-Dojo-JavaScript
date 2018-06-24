class FruitShop {
    constructor() {
        this.facture = 0;
        this.quantite = {
            pommes: 0,
            mele: 0,
            apples: 0,
            cerises: 0,
            bananes: 0
        };
    }

    doSomeThings(fruits) {
        let listFruits = fruits.split(",");
        this.countFruits(listFruits);
        this.facture +=
            (this.quantite.pommes + this.quantite.mele + this.quantite.apples) * 100 +
            this.quantite.cerises * 75 +
            this.quantite.bananes * 150;
        this.facture -= 20 * parseInt(this.quantite.cerises / 2); // Reduction Cerises
        this.facture -= 150 * parseInt(this.quantite.bananes / 2); // Reduction Bananes
        this.facture -= 100 * parseInt(this.quantite.apples / 3); // Reduction Apples
        this.facture -= 100 * parseInt(this.quantite.mele / 2); // Reduction Meles
        this.facture -= 100 * parseInt((this.quantite.pommes + this.quantite.mele + this.quantite.apples) / 4); // Reduction Pommes
        this.facture -=
            200 *
            parseInt(
                (this.quantite.pommes +
                    this.quantite.mele +
                    this.quantite.apples +
                    this.quantite.cerises +
                    this.quantite.bananes) /
                    5
            ); // Reduction Fruit
        return this.facture;
    }

    countFruits(fruits) {
        fruits.forEach(fruit => {
            let isPommes = fruit === "Pommes";
            let isApples = fruit === "Apples";
            let isMele = fruit === "Mele";
            let isBananes = fruit === "Bananes";
            let isCerises = fruit === "Cerises";
            isPommes
                ? (this.quantite.pommes += 1)
                : isMele
                    ? (this.quantite.mele += 1)
                    : isApples
                        ? (this.quantite.apples += 1)
                        : isBananes ? (this.quantite.bananes += 1) : isCerises ? (this.quantite.cerises += 1) : null;
        });
    }
}

exports.FruitShop = FruitShop;
