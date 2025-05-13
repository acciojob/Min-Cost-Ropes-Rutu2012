function mincost(arr) {
  if (arr.length <= 1) return 0;

  let totalCost = 0;

  // Convert the array into a min-heap behavior by sorting
  while (arr.length > 1) {
    // Sort array to get two smallest ropes
    arr.sort((a, b) => a - b);

    // Remove two shortest ropes
    const first = arr.shift();
    const second = arr.shift();

    // Cost to connect them
    const cost = first + second;
    totalCost += cost;

    // Insert the combined rope back into the array
    arr.push(cost);
  }

  return totalCost;
}

// Example usage
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
