function isPrime(num) {
  // Prime numbers must be greater than 1.
  if (num <= 1) {
    return false;
  }

  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// --- Simple Unit Tests ---

console.log('Running isPrime tests...');

console.assert(isPrime(2) === true, 'Test Case 1 Failed: 2 should be prime');
console.assert(isPrime(3) === true, 'Test Case 2 Failed: 3 should be prime');
console.assert(isPrime(17) === true, 'Test Case 3 Failed: 17 should be prime');
console.assert(isPrime(0) === false, 'Test Case 4 Failed: 0 should not be prime');
console.assert(isPrime(1) === false, 'Test Case 5 Failed: 1 should not be prime');
console.assert(isPrime(4) === false, 'Test Case 6 Failed: 4 should not be prime (perfect square)');
console.assert(isPrime(9) === false, 'Test Case 7 Failed: 9 should not be prime (perfect square)');
console.assert(isPrime(18) === false, 'Test Case 8 Failed: 18 should not be prime');

console.log('All isPrime tests passed!');
