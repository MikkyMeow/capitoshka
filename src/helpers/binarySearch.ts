interface IObject {
  [key: string]: any;
}

export const binarySearch = <T extends IObject>(
  arr: T[],
  property: keyof T,
  target: number
): number => {
  let left = 0;
  let right = arr.length - 1;
  let resultIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid][property] === target) {
      return mid;
    } else if (arr[mid][property] < target) {
      resultIndex = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return resultIndex;
};
