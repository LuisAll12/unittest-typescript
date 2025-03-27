export function mode(numbers: number[]): number[] {
    if (numbers.length === 0) {
      throw new Error("Cannot calculate mode of empty array");
    }

    const frequencyMap = new Map<number, number>();

    numbers.forEach((num) => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    const maxFrequency = Math.max(...frequencyMap.values());

    const modes = [...frequencyMap.keys()].filter(
        (num) => frequencyMap.get(num) === maxFrequency
    );

    return modes;
}
