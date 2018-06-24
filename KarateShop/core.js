class KarateShop {
    run(value, array) {
        let foundIndex = -1;
        array.forEach((element, index) => {
            if (element === value) {
                foundIndex = index;
            }
        });
        return foundIndex;
    }
}

exports.KarateShop = KarateShop;
