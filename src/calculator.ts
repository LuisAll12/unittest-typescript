export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(factorA: number, factorB: number): number {
  return factorA * factorB;
}

export function divide(dividend: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return dividend / divisor;
}