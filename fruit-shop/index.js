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

  getFacture(fruits) {
    const listFruits = fruits.split(",");
    this.countFruits(listFruits);
    this.facture +=
      (this.quantite.pommes + this.quantite.mele + this.quantite.apples) * 100 +
      this.quantite.cerises * 75 +
      this.quantite.bananes * 150;
    this.facture -= 20 * parseInt(this.quantite.cerises / 2);
    this.facture -= 150 * parseInt(this.quantite.bananes / 2);
    this.facture -= 100 * parseInt(this.quantite.apples / 3);
    this.facture -= 100 * parseInt(this.quantite.mele / 2);
    this.facture -= 100 * parseInt((this.quantite.pommes + this.quantite.mele + this.quantite.apples) / 4);
    this.facture -=
      200 *
      parseInt(
        (this.quantite.pommes +
          this.quantite.mele +
          this.quantite.apples +
          this.quantite.cerises +
          this.quantite.bananes) /
          5
      );
    return this.facture;
  }

  countFruits(fruits) {
    fruits.forEach(fruit => {
      const isPommes = fruit === "Pommes";
      const isApples = fruit === "Apples";
      const isMele = fruit === "Mele";
      const isBananes = fruit === "Bananes";
      const isCerises = fruit === "Cerises";
      if (isPommes) this.quantite.pommes += 1;
      if (isMele) this.quantite.mele += 1;
      if (isApples) this.quantite.apples += 1;
      if (isBananes) this.quantite.bananes += 1;
      if (isCerises) this.quantite.cerises += 1;
    });
  }
}

module.exports = FruitShop;
