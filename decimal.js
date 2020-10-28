function calculateCurrentBill(totalBill, units) {

}

const slabs = [1.45, 2.60, 3.30, 4.30, 5, 7.20, 8.50, 9, 9.5];


function categoryOne(totalUnits) {
    let consumerCharges;
    var range1, range2;
    if (totalUnits > 50) {
        consumerCharges = 30;
        range1 = 50;
        range2 = totalUnits - 50;
        return multiply(range1, slabs[0]) + multiply(range2, slabs[1]) + consumerCharges;
    } else {
        consumerCharges = 25;
        range2 = totalUnits;
        return multiply(range2, slabs[0]) + consumerCharges;
    }

}

function categoryTwo(totalUnits) {
    let consumerCharges = 50;
    var range1, range2;
    if (totalUnits > 100) {
        range1 = 100;
        range2 = totalUnits - 100;
        return multiply(range1, slabs[2]) + multiply(range2, slabs[3]) + consumerCharges;
    } else {
        range2 = totalUnits;
        return multiply(range2, slabs[2]) + consumerCharges;
    }
}

function categoryThree(totalUnits) {
    let range1, range2, range3, range4
    if (totalUnits > 801) {
        let tempTotal = multiply(200, slabs[4]) + multiply(100, slabs[5]) + multiply(100, slabs[6]) + multiply(400, slabs[7]);
        range1 = (totalUnits - 800 > 0) ? multiply((totalUnits - 800), slabs[8]) : 0;
        return tempTotal + range1;
    } else if (totalUnits >= 401 && totalUnits <= 800) {
        let tempTotal = multiply(200, slabs[4]) + multiply(100, slabs[5]) + multiply(100, slabs[6]);
        let range1 = (tempTotal - 400 > 0) ? multiply((tempTotal - 400), slabs[7]) : 0;
        return tempTotal + range1;
    } else if (totalUnits >= 301 && totalUnits <= 400) {
        let tempTotal = multiply(200, slabs[4]) + multiply(100, slabs[5])
        let range1 = (tempTotal - 300 > 0) ? multiply((tempTotal - 300), slabs[6]) : 0;
        return tempTotal + range1;
    } else if (totalUnits >= 201 && totalUnits <= 300) {
        let tempTotal = multiply(200, slabs[4])
        let range1 = (tempTotal - 200 > 0) ? multiply((tempTotal - 200), slabs[5]) : 0;
        return tempTotal + range1;
    } else {
        let tempTotal = multiply(200, slabs[4])
        return tempTotal + range1;
    }

}

function rangeHundered(range) {
    while (range > 100) {

    }
}

function multiply(units, unitValue) {
    return units * unitValue;
}
class FlatDetails {
    constructor(name, units) {
        this.name = name;
        this.units = units;
    }
}
