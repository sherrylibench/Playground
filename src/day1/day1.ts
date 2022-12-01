import * as fs from "fs";

const inputFromFile = fs.readFileSync("./src/day1/input.txt", "utf8");

export function getMostCalories(input: String = inputFromFile): String {
  const groupByEachElf = input.split(/\n\s*\n/);
  const sumofEachElf = groupByEachElf.map(
    (array) =>
      array
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
  return `The most calory is ${mostCalory}, the top three are ${topThree}, and total is ${topThree.reduce(
    (sum, curr) => sum + curr
  )}`;
}

console.log(getMostCalories());
