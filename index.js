//----wrong code-----
const CalcInterface = require('./calc-interface');

class WrongBasicCalculator extends CalcInterface {

    add(value1, value2) {
        return value1 + value2;
    }

    substract(value1, value2) {
        return value1 - value2;
    }

    multiply(value1, value2) {
        return value1 * value2;
    }

    divide(value1, value2) {
        return value1 / value2;
    }

    sine(degrees) {
        throw new Error('This function is not available');
    }

    cosine(degrees) {
        throw new Error('This function is not available');
    }

}

//----------------------right code-------------------------------

const BasicCalcInterface = require('./basic-calc-interface');

class BasicCalculator extends BasicCalcInterface {

    add(value1, value2) {
        return value1 + value2;
    }

    substract(value1, value2) {
        return value1 - value2;
    }

    multiply(value1, value2) {
        return value1 * value2;
    }

    divide(value1, value2) {
        return value1 / value2;
    }

}

const { sine, cosine } = require('./trigonometric-calc-interface');

class ScientificCalculator extends BasicCalculator {

}

Object.assign(ScientificCalculator.prototype, sine);
Object.assign(ScientificCalculator.prototype, cosine);

const calc = new ScientificCalculator();
console.log(calc.CalculateSine(45));
console.log(calc.CalculateCosine(45));
console.log(calc.add(5, 4));