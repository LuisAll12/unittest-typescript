export function standardDeviation(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Cannot calculate standard deviation of empty array");
    }
    const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    const squaredDifferences = numbers.map(num => (num - mean) ** 2);
    const variance = squaredDifferences.reduce((sum, num) => sum + num, 0) / numbers.length;

    return Math.sqrt(variance);
}  