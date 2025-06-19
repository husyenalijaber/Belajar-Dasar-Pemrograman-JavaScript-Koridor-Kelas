function fibonacci(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const fibSeries = fibonacci(n - 1);
  const nextValue = fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];

  return [...fibSeries, nextValue];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
