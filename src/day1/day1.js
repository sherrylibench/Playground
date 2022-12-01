"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMostCalories = void 0;
const fs = __importStar(require("fs"));
const inputFromFile = fs.readFileSync("./src/day1/input.txt", "utf8");
function getMostCalories(input = inputFromFile) {
    const groupByEachElf = input.split(/\n\s*\n/);
    const sumofEachElf = groupByEachElf.map((array) => array
        .split(/\n/) //split by new line
        .map((value) => Number(value)) //convert to number
        .reduce((sum, current) => sum + current) //get the sum
    );
    //part 1
    const mostCalory = Math.max(...sumofEachElf);
    //part 2
    const topThree = sumofEachElf
        .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))
        .slice(0, 3);
    //print results
    return `The most calory is ${mostCalory}, the top three are ${topThree}, and total is ${topThree.reduce((sum, curr) => sum + curr)}`;
}
exports.getMostCalories = getMostCalories;
console.log(getMostCalories());
