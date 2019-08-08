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

test('Rosetta Code: 100 doors', () => {
  expect(algorithms.getFinalOpenedDoors(100))
    .toStrictEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100])
})

test('Rosetta Code: 24 game', () => {
  const check = (input) => {
    return (answer) => {
      return eval(answer) === 24
    }
  }
  expect(algorithms.solve24('4878'))
    .toSatisfy(check('4878'))
  expect(algorithms.solve24('1234'))
    .toSatisfy(check('1234'))
  expect(algorithms.solve24('6789'))
    .toSatisfy(check('6789'))
  expect(algorithms.solve24('1127'))
    .toSatisfy(check('1127'))
})

test('Rosetta Code: 9 billion names of God the integer', () => {
  expect(algorithms.numberOfNames(5))
    .toStrictEqual(7)
  expect(algorithms.numberOfNames(12))
    .toStrictEqual(77)
  expect(algorithms.numberOfNames(18))
    .toStrictEqual(385)
  expect(algorithms.numberOfNames(23))
    .toStrictEqual(1255)
  expect(algorithms.numberOfNames(42))
    .toStrictEqual(53174)
  expect(algorithms.numberOfNames(123))
    .toStrictEqual(2552338241)
  expect(algorithms.numberOfNames(250))
    .toStrictEqual(230793554364681)
})

test('Rosetta Code: ABC Problem', () => {
  expect(algorithms.canMakeWord('bark'))
    .toStrictEqual(true)
  expect(algorithms.canMakeWord('BooK'))
    .toStrictEqual(false)
  expect(algorithms.canMakeWord('TReAT'))
    .toStrictEqual(true)
  expect(algorithms.canMakeWord('COMMON'))
    .toStrictEqual(false)
  expect(algorithms.canMakeWord('squAD'))
    .toStrictEqual(true)
  expect(algorithms.canMakeWord('conFUSE'))
    .toStrictEqual(true)
})

test('Rosetta Code: Abundant, deficient and perfect number classifications', () => {
  expect(algorithms.getDPA(6))
    .toStrictEqual([5, 1, 0])
  expect(algorithms.getDPA(10))
    .toStrictEqual([9, 1, 0])
  expect(algorithms.getDPA(100))
    .toStrictEqual([76, 2, 22])
  expect(algorithms.getDPA(1000))
    .toStrictEqual([751, 3, 246])
  expect(algorithms.getDPA(13195))
    .toStrictEqual([9914, 4, 3277])
  expect(algorithms.getDPA(20000))
    .toStrictEqual([15043, 4, 4953])
})

test('Rosetta Code: Accumulator factory', () => {
  const testAccumulator1 = algorithms.accumulator(0)
  expect(testAccumulator1)
    .toBeFunction()
  expect(testAccumulator1(1))
    .toStrictEqual(1)
  expect(testAccumulator1(2))
    .toStrictEqual(3)
  expect(testAccumulator1(3))
    .toStrictEqual(6)
  expect(testAccumulator1(4))
    .toStrictEqual(10)
  const testAccumulator2 = algorithms.accumulator(3)
  expect(testAccumulator2)
    .toBeFunction()
  expect(testAccumulator2(-4))
    .toStrictEqual(-1)
  expect(testAccumulator2(1.5))
    .toStrictEqual(.5)
  expect(testAccumulator2(5))
    .toStrictEqual(5.5)
})

test('Rosetta Code: Ackermann function', () => {
  expect(algorithms.ack(0, 0))
    .toStrictEqual(1)
  expect(algorithms.ack(1, 1))
    .toStrictEqual(3)
  expect(algorithms.ack(2, 5))
    .toStrictEqual(13)
  expect(algorithms.ack(3, 3))
    .toStrictEqual(61)
})

test('Rosetta Code: Align columns', () => {
  const input = [
    'Given$a$text$file$of$many$lines',
    'where$fields$within$a$line$',
    'are$delineated$by$a$single$"dollar"$character',
    'write$a$program',
    'that$aligns$each$column$of$fields$',
    'by$ensuring$that$words$in$each$',
    'column$are$separated$by$at$least$one$space.',
    'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
    'justified,$right$justified',
    'or$center$justified$within$its$column.'
  ];

  const rightAligned =
    '     Given          a      text   file     of     many     lines\n' +
    '     where     fields    within      a   line \n' +
    '       are delineated        by      a single "dollar" character\n' +
    '     write          a   program\n' +
    '      that     aligns      each column     of   fields \n' +
    '        by   ensuring      that  words     in     each \n' +
    '    column        are separated     by     at    least       one space.\n' +
    '  Further,      allow       for   each   word       in         a column to be either left \n' +
    'justified,      right justified\n' +
    '        or     center justified within    its  column.'
  expect(algorithms.formatText(input, 'right'))
    .toStrictEqual(rightAligned)

  const leftAligned =
    'Given      a          text      file   of     many     lines    \n' +
    'where      fields     within    a      line   \n' +
    'are        delineated by        a      single "dollar" character\n' +
    'write      a          program  \n' +
    'that       aligns     each      column of     fields   \n' +
    'by         ensuring   that      words  in     each     \n' +
    'column     are        separated by     at     least    one       space.\n' +
    'Further,   allow      for       each   word   in       a         column to be either left \n' +
    'justified, right      justified\n' +
    'or         center     justified within its    column. '
  expect(algorithms.formatText(input, 'left'))
    .toStrictEqual(leftAligned)

  const centerAligned =
    '  Given        a        text     file    of     many     lines  \n' +
    '  where      fields    within     a     line  \n' +
    '   are     delineated    by       a    single \"dollar\" character\n' +
    '  write        a       program \n' +
    '   that      aligns     each    column   of    fields  \n' +
    '    by      ensuring    that    words    in     each   \n' +
    '  column      are     separated   by     at    least      one    space.\n' +
    ' Further,    allow       for     each   word     in        a     column to be either left \n' +
    'justified,   right    justified\n' +
    '    or       center   justified within  its   column. '
  expect(algorithms.formatText(input, 'center'))
    .toStrictEqual(centerAligned)
})

test('Rosetta Code: Amicable pairs', () => {
  expect(algorithms.amicablePairsUpTo(300))
    .toStrictEqual([[220, 284]])
  expect(algorithms.amicablePairsUpTo(3000))
    .toStrictEqual([[220, 284], [1184, 1210], [2620, 2924]])
  expect(algorithms.amicablePairsUpTo(20000))
    .toStrictEqual([[220, 284], [1184, 1210], [2620, 2924], [5020, 5564], [6232, 6368], [10744, 10856], [12285, 14595], [17296, 18416]])
})

test('Rosetta Code: Averages/Mode', () => {
  expect(algorithms.mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]))
    .toStrictEqual([6])
  expect(algorithms.mode([1, 2, 4, 4, 1]))
    .toStrictEqual([1, 4])
})

test('Rosetta Code: Averages/Pythagorean means', () => {
  expect(algorithms.pythagoreanMeans([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    .toStrictEqual({
      values: {
        Arithmetic: 5.5,
        Geometric: 4.528728688116765,
        Harmonic: 3.414171521474055
      },
      test: 'is A >= G >= H ? yes'
    })
})

test('Rosetta Code: Averages/Root mean square', () => {
  expect(algorithms.rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    .toStrictEqual(6.2048368229954285)
})

test('Rosetta Code: Babbage problem', () => {
  const check = (babbageNum, endDigits) => {
    return (answer) => {
      return answer < babbageNum && (answer * answer) % 1000000 === endDigits
    }
  }

  expect(algorithms.babbage(99736, 269696))
    .toSatisfy(check(99736, 269696))
})

test('Rosetta Code: Balanced brackets', () => {
  expect(algorithms.isBalanced("[]"))
    .toStrictEqual(true)
  expect(algorithms.isBalanced("]][[[][][][]]["))
    .toStrictEqual(false)
  expect(algorithms.isBalanced("[][[[[][][[[]]]]]]"))
    .toStrictEqual(true)
  expect(algorithms.isBalanced("]["))
    .toStrictEqual(false)
  expect(algorithms.isBalanced("[[[]]]][[]"))
    .toStrictEqual(false)
  expect(algorithms.isBalanced("][[]"))
    .toStrictEqual(false)
  expect(algorithms.isBalanced("][[][]][[[]]"))
    .toStrictEqual(false)
  expect(algorithms.isBalanced("[[][]]]["))
    .toStrictEqual(false)
  expect(algorithms.isBalanced("[[[]]][[]]]][][["))
    .toStrictEqual(false)
  expect(algorithms.isBalanced("[]][[]]][[[[][]]"))
    .toStrictEqual(false)
  expect(algorithms.isBalanced("][]][[]["))
    .toStrictEqual(false)
  expect(algorithms.isBalanced("[[]][[][]]"))
    .toStrictEqual(true)
  expect(algorithms.isBalanced("[[]]"))
    .toStrictEqual(true)
  expect(algorithms.isBalanced("]][]][[]][[["))
    .toStrictEqual(false)
  expect(algorithms.isBalanced("][]][][["))
    .toStrictEqual(false)
  expect(algorithms.isBalanced("][]["))
    .toStrictEqual(false)
  expect(algorithms.isBalanced("[[]]][][][[]]["))
    .toStrictEqual(false)
  expect(algorithms.isBalanced(""))
    .toStrictEqual(true)
})

test('Rosetta Code: Circles of given radius through two points', () => {
  expect(algorithms.getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)).toStrictEqual([[1.8631, 1.9742], [-0.8632, -0.7521]])
  expect(algorithms.getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)).toStrictEqual([0, 1])
  expect(algorithms.getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)).toStrictEqual('Coincident point.Infinite solutions')
  expect(algorithms.getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)).toStrictEqual('No intersection.Points further apart than circle diameter')
  expect(algorithms.getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)).toStrictEqual('Radius Zero')
})