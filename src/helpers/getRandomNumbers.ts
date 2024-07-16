export function getRandomNumbers(maxNumber: number, limit: number): number[] {
  let randomNumbers: number[] = [];

  if (maxNumber < limit) {
    for (let i = 0; i < maxNumber; i++) {
      randomNumbers.push(i);
    }
  } else {
    let numbersSet: Set<number> = new Set();
    while (numbersSet.size < limit) {
      let randomNumber = Math.floor(Math.random() * maxNumber);
      if (!numbersSet.has(randomNumber)) {
        numbersSet.add(randomNumber);
      }
    }
    randomNumbers = Array.from(numbersSet);
  }

  return randomNumbers;
}
