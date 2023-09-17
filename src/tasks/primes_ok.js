"use strict";
// 👓 https://github.com/LabsAdemy/CleanCodeLab/tree/NAME/src/tasks
/* eslint-disable no-magic-numbers */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrimeFactors = void 0;
function getPrimeFactors(limit) {
    var SMALLEST_PRIME = 2;
    var NULL_REMAINDER = 0;
    var primeFactors = [];
    var testingFactor = 2;
    while (limit > SMALLEST_PRIME) {
        if (limit % testingFactor === NULL_REMAINDER) {
            primeFactors.push(testingFactor);
            limit /= testingFactor;
        }
        else {
            testingFactor++;
        }
    }
    return primeFactors;
}
exports.getPrimeFactors = getPrimeFactors;
