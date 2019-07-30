const algorithms = require('./index')

test('Find the Symmetric Difference', () => {
  expect(algorithms.findSymmetricDifference([1, 2, 3], [5, 2, 1, 4]))
    .toIncludeSameMembers([3, 4, 5])
  expect(algorithms.findSymmetricDifference([1, 2, 3, 3], [5, 2, 1, 4]))
    .toIncludeSameMembers([3, 4, 5])
  expect(algorithms.findSymmetricDifference([1, 2, 3], [5, 2, 1, 4, 5]))
    .toIncludeSameMembers([3, 4, 5])
  expect(algorithms.findSymmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]))
    .toIncludeSameMembers([1, 4, 5])
  expect(algorithms.findSymmetricDifference([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))
    .toIncludeSameMembers([1, 4, 5])
  expect(algorithms.findSymmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
    .toIncludeSameMembers([2, 3, 4, 6, 7])
  expect(algorithms.findSymmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))
    .toIncludeSameMembers([1, 2, 4, 5, 6, 7, 8, 9])
})

test('Inventory Update', () => {
  expect(algorithms.updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))
    .toIncludeSameMembers([[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]])
  expect(algorithms.updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []))
    .toIncludeSameMembers([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]])
  expect(algorithms.updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]))
    .toIncludeSameMembers([[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]])
  expect(algorithms.updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]))
    .toIncludeSameMembers([[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]])
})

test('No Repeats Please', () => {
  expect(algorithms.permAlone("aab")).toBe(2)
  expect(algorithms.permAlone("aaa")).toBe(0)
  expect(algorithms.permAlone("aabb")).toBe(8)
  expect(algorithms.permAlone("abcdefa")).toBe(3600)
  expect(algorithms.permAlone("abfdefa")).toBe(2640)
  expect(algorithms.permAlone("zzzzzzzz")).toBe(0)
  expect(algorithms.permAlone("a")).toBe(1)
  expect(algorithms.permAlone("aaab")).toBe(0)
  expect(algorithms.permAlone("aaabb")).toBe(12)
})

test('Pairwise', () => {
  expect(algorithms.pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11)
  expect(algorithms.pairwise([1, 3, 2, 4], 4)).toBe(1)
  expect(algorithms.pairwise([1, 1, 1], 2)).toBe(1)
  expect(algorithms.pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10)
  expect(algorithms.pairwise([], 100)).toBe(0)
})

test('Implement Bubble Sort', () => {
  expect(algorithms.bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
    .toStrictEqual([1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643])
})

test('Implement Selection Sort', () => {
  expect(algorithms.selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
    .toStrictEqual([1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643])
})

test('Implement Insertion Sort', () => {
  expect(algorithms.insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
    .toStrictEqual([1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643])
})

test('Implement Quick Sort', () => {
  expect(algorithms.quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
    .toStrictEqual([1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643])
})

test('Implement Merge Sort', () => {
  expect(algorithms.mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
    .toStrictEqual([1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643])
})

test('Implement Breadth First Search', () => {
  expect(algorithms.bfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1))
    .toStrictEqual({ 0: 1, 1: 0, 2: 1, 3: 2 })
  expect(algorithms.bfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 1))
    .toStrictEqual({ 0: 1, 1: 0, 2: 1, 3: Infinity })
  expect(algorithms.bfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 0))
    .toStrictEqual({ 0: 0, 1: 1, 2: 2, 3: 3 })
  expect(algorithms.bfs([[0, 1], [1, 0]], 0))
    .toStrictEqual({ 0: 0, 1: 1 })
})

test('Implement Depth First Search', () => {
  expect(algorithms.dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1))
    .toStrictEqual([1, 0, 2, 3])
  expect(algorithms.dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], 3))
    .toStrictEqual([3])
  expect(algorithms.dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 3))
    .toStrictEqual([3, 2])
  expect(algorithms.dfs([[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]], 0))
    .toStrictEqual([0, 1])
})