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
  expect(algorithms.updateInventory([[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']]))
    .toIncludeSameMembers([[88, 'Bowling Ball'], [2, 'Dirty Sock'], [3, 'Hair Pin'], [3, 'Half-Eaten Apple'], [5, 'Microphone'], [7, 'Toothpaste']])
  expect(algorithms.updateInventory([[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], []))
    .toIncludeSameMembers([[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']])
  expect(algorithms.updateInventory([], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']]))
    .toIncludeSameMembers([[67, 'Bowling Ball'], [2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [7, 'Toothpaste']])
  expect(algorithms.updateInventory([[0, 'Bowling Ball'], [0, 'Dirty Sock'], [0, 'Hair Pin'], [0, 'Microphone']], [[1, 'Hair Pin'], [1, 'Half-Eaten Apple'], [1, 'Bowling Ball'], [1, 'Toothpaste']]))
    .toIncludeSameMembers([[1, 'Bowling Ball'], [0, 'Dirty Sock'], [1, 'Hair Pin'], [1, 'Half-Eaten Apple'], [0, 'Microphone'], [1, 'Toothpaste']])
})

test('No Repeats Please', () => {
  expect(algorithms.permAlone('aab')).toBe(2)
  expect(algorithms.permAlone('aaa')).toBe(0)
  expect(algorithms.permAlone('aabb')).toBe(8)
  expect(algorithms.permAlone('abcdefa')).toBe(3600)
  expect(algorithms.permAlone('abfdefa')).toBe(2640)
  expect(algorithms.permAlone('zzzzzzzz')).toBe(0)
  expect(algorithms.permAlone('a')).toBe(1)
  expect(algorithms.permAlone('aaab')).toBe(0)
  expect(algorithms.permAlone('aaabb')).toBe(12)
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
    '   are     delineated    by       a    single "dollar" character\n' +
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
  expect(algorithms.isBalanced('[]'))
    .toStrictEqual(true)
  expect(algorithms.isBalanced(']][[[][][][]]['))
    .toStrictEqual(false)
  expect(algorithms.isBalanced('[][[[[][][[[]]]]]]'))
    .toStrictEqual(true)
  expect(algorithms.isBalanced(']['))
    .toStrictEqual(false)
  expect(algorithms.isBalanced('[[[]]]][[]'))
    .toStrictEqual(false)
  expect(algorithms.isBalanced('][[]'))
    .toStrictEqual(false)
  expect(algorithms.isBalanced('][[][]][[[]]'))
    .toStrictEqual(false)
  expect(algorithms.isBalanced('[[][]]]['))
    .toStrictEqual(false)
  expect(algorithms.isBalanced('[[[]]][[]]]][][['))
    .toStrictEqual(false)
  expect(algorithms.isBalanced('[]][[]]][[[[][]]'))
    .toStrictEqual(false)
  expect(algorithms.isBalanced('][]][[]['))
    .toStrictEqual(false)
  expect(algorithms.isBalanced('[[]][[][]]'))
    .toStrictEqual(true)
  expect(algorithms.isBalanced('[[]]'))
    .toStrictEqual(true)
  expect(algorithms.isBalanced(']][]][[]][[['))
    .toStrictEqual(false)
  expect(algorithms.isBalanced('][]][][['))
    .toStrictEqual(false)
  expect(algorithms.isBalanced('][]['))
    .toStrictEqual(false)
  expect(algorithms.isBalanced('[[]]][][][[]]['))
    .toStrictEqual(false)
  expect(algorithms.isBalanced(''))
    .toStrictEqual(true)
})

test('Rosetta Code: Circles of given radius through two points', () => {
  expect(algorithms.getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)).toStrictEqual([[1.8631, 1.9742], [-0.8632, -0.7521]])
  expect(algorithms.getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)).toStrictEqual([0, 1])
  expect(algorithms.getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)).toStrictEqual('Coincident point. Infinite solutions')
  expect(algorithms.getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)).toStrictEqual('No intersection. Points further apart than circle diameter')
  expect(algorithms.getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)).toStrictEqual('Radius Zero')
})

test('Rosetta Code: Closest-pair problem', () => {
  class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
    getX() {
      return this.x
    }
    getY() {
      return this.y
    }
  }

  const points1 = [
    new Point(0.748501, 4.09624),
    new Point(3.00302, 5.26164),
    new Point(3.61878, 9.52232),
    new Point(7.46911, 4.71611),
    new Point(5.7819, 2.69367),
    new Point(2.34709, 8.74782),
    new Point(2.87169, 5.97774),
    new Point(6.33101, 0.463131),
    new Point(7.46489, 4.6268),
    new Point(1.45428, 0.087596)
  ]

  const answer1 = {
    distance: 0.0894096443343775,
    pair: [
      {
        x: 7.46489,
        y: 4.6268
      },
      {
        x: 7.46911,
        y: 4.71611
      }
    ]
  }

  expect(algorithms.getClosestPair(points1))
    .toEqual(answer1)

  const points2 = [
    new Point(37100, 13118),
    new Point(37134, 1963),
    new Point(37181, 2008),
    new Point(37276, 21611),
    new Point(37307, 9320)
  ]

  const answer2 = {
    distance: 65.06919393998976,
    pair: [
      {
        x: 37134,
        y: 1963
      },
      {
        x: 37181,
        y: 2008
      }
    ]
  }

  expect(algorithms.getClosestPair(points2))
    .toEqual(answer2)

  const benchmarkPoints = [
    new Point(16909, 54699),
    new Point(14773, 61107),
    new Point(95547, 45344),
    new Point(95951, 17573),
    new Point(5824, 41072),
    new Point(8769, 52562),
    new Point(21182, 41881),
    new Point(53226, 45749),
    new Point(68180, 887),
    new Point(29322, 44017),
    new Point(46817, 64975),
    new Point(10501, 483),
    new Point(57094, 60703),
    new Point(23318, 35472),
    new Point(72452, 88070),
    new Point(67775, 28659),
    new Point(19450, 20518),
    new Point(17314, 26927),
    new Point(98088, 11164),
    new Point(25050, 56835),
    new Point(8364, 6892),
    new Point(37868, 18382),
    new Point(23723, 7701),
    new Point(55767, 11569),
    new Point(70721, 66707),
    new Point(31863, 9837),
    new Point(49358, 30795),
    new Point(13041, 39745),
    new Point(59635, 26523),
    new Point(25859, 1292),
    new Point(1551, 53890),
    new Point(70316, 94479),
    new Point(48549, 86338),
    new Point(46413, 92747),
    new Point(27186, 50426),
    new Point(27591, 22655),
    new Point(10905, 46153),
    new Point(40408, 84202),
    new Point(52821, 73520),
    new Point(84865, 77388),
    new Point(99819, 32527),
    new Point(34404, 75657),
    new Point(78457, 96615),
    new Point(42140, 5564),
    new Point(62175, 92342),
    new Point(54958, 67112),
    new Point(4092, 19709),
    new Point(99415, 60298),
    new Point(51090, 52158),
    new Point(48953, 58567)
  ]

  const benchmarkAnswer = {
    distance: 6754.625082119658,
    pair: [
      {
        x: 14773,
        y: 61107
      },
      {
        x: 16909,
        y: 54699
      }
    ]
  }

  expect(algorithms.getClosestPair(benchmarkPoints))
    .toEqual(benchmarkAnswer)
})

test('Rosetta Code: Combinations', () => {
  expect(algorithms.combinations(3, 5))
    .toStrictEqual([[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]])
  expect(algorithms.combinations(4, 6))
    .toStrictEqual([[0, 1, 2, 3], [0, 1, 2, 4], [0, 1, 2, 5], [0, 1, 3, 4], [0, 1, 3, 5], [0, 1, 4, 5], [0, 2, 3, 4], [0, 2, 3, 5], [0, 2, 4, 5], [0, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 4, 5], [1, 3, 4, 5], [2, 3, 4, 5]])
})

test('Rosetta Code: Comma quibbling', () => {
  expect(algorithms.quibble([]))
    .toStrictEqual('{}')
  expect(algorithms.quibble(['ABC']))
    .toStrictEqual('{ABC}')
  expect(algorithms.quibble(['ABC', 'DEF']))
    .toStrictEqual('{ABC and DEF}')
  expect(algorithms.quibble(['ABC', 'DEF', 'G', 'H']))
    .toStrictEqual('{ABC,DEF,G and H}')
})

test('Rosetta Code: Compare a list of strings', () => {
  expect(algorithms.allEqual(['AA', 'AA', 'AA', 'AA']))
    .toStrictEqual(true)
  expect(algorithms.azSorted(['AA', 'AA', 'AA', 'AA']))
    .toStrictEqual(false)
  expect(algorithms.allEqual(['AA', 'ACB', 'BB', 'CC']))
    .toStrictEqual(false)
  expect(algorithms.azSorted(['AA', 'ACB', 'BB', 'CC']))
    .toStrictEqual(true)
  expect(algorithms.allEqual([]))
    .toStrictEqual(true)
  expect(algorithms.azSorted([]))
    .toStrictEqual(true)
  expect(algorithms.allEqual(['AA']))
    .toStrictEqual(true)
  expect(algorithms.azSorted(['AA']))
    .toStrictEqual(true)
  expect(algorithms.allEqual(['BB', 'AA']))
    .toStrictEqual(false)
  expect(algorithms.azSorted(['BB', 'AA']))
    .toStrictEqual(false)
})

test('Rosetta Code: Convert seconds to compound duration', () => {
  expect(algorithms.convertSeconds(7259))
    .toEqual('2 hr, 59 sec')
  expect(algorithms.convertSeconds(86400))
    .toEqual('1 d')
  expect(algorithms.convertSeconds(6000000))
    .toEqual('9 wk, 6 d, 10 hr, 40 min')
})

test('Rosetta Code: Count occurrences of a substring', () => {
  expect(algorithms.countSubstring('the three truths', 'th'))
    .toStrictEqual(3)
  expect(algorithms.countSubstring('ababababab', 'abab'))
    .toStrictEqual(2)
  expect(algorithms.countSubstring('abaabba*bbaba*bbab', 'a*b'))
    .toStrictEqual(2)
})

test('Rosetta Code: Count the coins', () => {
  expect(algorithms.countCoins(100))
    .toStrictEqual(242)
})

test('Rosetta Code: Cramer\'s rule', () => {
  expect(algorithms.cramersRule([[2, -1, 5, 1], [3, 2, 2, -6], [1, 3, 3, -1], [5, -2, -3, 3]], [-3, -32, -47, 49]))
    .toStrictEqual([2, -12, -4, 1])
  expect(algorithms.cramersRule([[3, 1, 1], [2, 2, 5], [1, -3, -4]], [3, -1, 2]))
    .toStrictEqual([1, 1, -1])
})

test('Rosetta Code: Date format', () => {
  expect(algorithms.getDateFormats(new Date('2007-11-23 CST')))
    .toStrictEqual(['2007-11-23', 'Friday, November 23, 2007'])
  expect(algorithms.getDateFormats())
    .toBeArrayOfSize(2)
  expect(algorithms.getDateFormats())
    .toSatisfyAll((e) => typeof e === 'string')
})

test('Rosetta Code: Date manipulation', () => {
  expect(algorithms.add12Hours('January 17 2017 11:43am EST'))
    .toStrictEqual('January 17 2017 11:43pm EST')
  expect(algorithms.add12Hours('March 7 2009 7:30pm EST'))
    .toStrictEqual('March 8 2009 7:30am EST')
  expect(algorithms.add12Hours('February 29 2004 9:15pm EST'))
    .toStrictEqual('March 1 2004 9:15am EST')
  expect(algorithms.add12Hours('February 28 1999 3:15pm EST'))
    .toStrictEqual('March 1 1999 3:15am EST')
  expect(algorithms.add12Hours('December 31 2020 1:45pm EST'))
    .toStrictEqual('January 1 2021 1:45am EST')
})

test('Rosetta Code: Day of the week', () => {
  expect(algorithms.findXmasSunday(1970, 2017))
    .toStrictEqual([1977, 1983, 1988, 1994, 2005, 2011, 2016])
  expect(algorithms.findXmasSunday(2008, 2121))
    .toStrictEqual([2011, 2016, 2022, 2033, 2039, 2044, 2050, 2061, 2067, 2072, 2078, 2089, 2095, 2101, 2107, 2112, 2118])
})

test('Rosetta Code: Deal cards for FreeCell', () => {
  const game1 = [
    ['JD', '2D', '9H', 'JC', '5D', '7H', '7C', '5H'],
    ['KD', 'KC', '9S', '5S', 'AD', 'QC', 'KH', '3H'],
    ['2S', 'KS', '9D', 'QD', 'JS', 'AS', 'AH', '3C'],
    ['4C', '5C', 'TS', 'QH', '4H', 'AC', '4D', '7S'],
    ['3S', 'TD', '4S', 'TH', '8H', '2C', 'JH', '7D'],
    ['6D', '8S', '8D', 'QS', '6C', '3D', '8C', 'TC'],
    ['6S', '9C', '2H', '6H']
  ]

  const game617 = [
    ['7D', 'AD', '5C', '3S', '5S', '8C', '2D', 'AH'],
    ['TD', '7S', 'QD', 'AC', '6D', '8H', 'AS', 'KH'],
    ['TH', 'QC', '3H', '9D', '6S', '8D', '3D', 'TC'],
    ['KD', '5H', '9S', '3C', '8S', '7H', '4D', 'JS'],
    ['4C', 'QS', '9C', '9H', '7C', '6H', '2C', '2S'],
    ['4S', 'TS', '2H', '5D', 'JC', '6C', 'JH', 'QH'],
    ['JD', 'KS', 'KC', '4H']
  ]

  expect(algorithms.dealFreeCell(1))
    .toStrictEqual(game1)

  expect(algorithms.dealFreeCell(617))
    .toStrictEqual(game617)
})

test('Rosetta Code: Deepcopy', () => {
  const obj2 = { 't': 'test', 'a': ['an', 'array'] }
  const obj3 = { 't': 'try', 'o': { 't': 'test', 'a': ['an', 'array'] } }
  expect(algorithms.deepcopy(obj2))
    .not.toBe(obj2)
  expect(algorithms.deepcopy(obj2))
    .toStrictEqual(obj2)
  expect(algorithms.deepcopy(obj3))
    .toStrictEqual(obj3)
})

test('Rosetta Code: Define a primitive data type', () => {
  expect(typeof algorithms.Num)
    .toStrictEqual('function')
  expect(typeof (new algorithms.Num(4)))
    .toStrictEqual('object')
  expect(() => new algorithms.Num('test'))
    .toThrow()
  expect(() => new algorithms.Num(0))
    .toThrow()
  expect(() => new algorithms.Num(-5))
    .toThrow()
  expect(() => new algorithms.Num(11))
    .toThrow()
  expect(() => new algorithms.Num(20))
    .toThrow()
  expect(new algorithms.Num(3) + new algorithms.Num(4))
    .toStrictEqual(7)
  expect(new algorithms.Num(3) - new algorithms.Num(4))
    .toStrictEqual(-1)
  expect(new algorithms.Num(3) * new algorithms.Num(4))
    .toStrictEqual(12)
  expect(new algorithms.Num(3) / new algorithms.Num(4))
    .toStrictEqual(0.75)
  expect(new algorithms.Num(3) < new algorithms.Num(4))
    .toBeTrue()
  expect(new algorithms.Num(3) > new algorithms.Num(4))
    .toBeFalse()
  expect((new algorithms.Num(5)).toString())
    .toStrictEqual('5')
})

test('Rosetta Code: Department Numbers', () => {
  expect(algorithms.departments([1, 2, 3], 6))
    .toStrictEqual([[2, 1, 3], [2, 3, 1]])
  expect(algorithms.departments([1, 2, 3, 4, 5, 6, 7], 12))
    .toStrictEqual([[2, 3, 7], [2, 4, 6], [2, 6, 4], [2, 7, 3], [4, 1, 7], [4, 2, 6], [4, 3, 5], [4, 5, 3], [4, 6, 2], [4, 7, 1], [6, 1, 5], [6, 2, 4], [6, 4, 2], [6, 5, 1]])
})

test('Rosetta Code: Discordian date', () => {
  expect(algorithms.discordianDate(new Date(2010, 6, 22)))
    .toStrictEqual('Pungenday, the 57th day of Confusion in the YOLD 3176')
  expect(algorithms.discordianDate(new Date(2012, 1, 28)))
    .toStrictEqual('Prickle-Prickle, the 59th day of Chaos in the YOLD 3178')
  expect(algorithms.discordianDate(new Date(2012, 1, 29)))
    .toStrictEqual('Setting Orange, the 60th day of Chaos in the YOLD 3178. Celebrate St. Tib\'s Day!')
  expect(algorithms.discordianDate(new Date(2012, 2, 1)))
    .toStrictEqual('Setting Orange, the 60th day of Chaos in the YOLD 3178')
  expect(algorithms.discordianDate(new Date(2010, 0, 5)))
    .toStrictEqual('Setting Orange, the 5th day of Chaos in the YOLD 3176. Celebrate Mungday!')
  expect(algorithms.discordianDate(new Date(2011, 4, 3)))
    .toStrictEqual('Pungenday, the 50th day of Discord in the YOLD 3177. Celebrate Discoflux!')
  expect(algorithms.discordianDate(new Date(2015, 9, 19)))
    .toStrictEqual('Boomtime, the 73rd day of Bureaucracy in the YOLD 3181')
})

test('Rosetta Code: Element-wise operations', () => {
  expect(algorithms.operation('m_add', [[1, 2], [3, 4]], [[1, 2], [3, 4]]))
    .toStrictEqual([[2, 4], [6, 8]])
  expect(algorithms.operation('s_add', [[1, 2], [3, 4]], 2))
    .toStrictEqual([[3, 4], [5, 6]])
  expect(algorithms.operation('m_sub', [[1, 2], [3, 4]], [[1, 2], [3, 4]]))
    .toStrictEqual([[0, 0], [0, 0]])
  expect(algorithms.operation('m_mult', [[1, 2], [3, 4]], [[1, 2], [3, 4]]))
    .toStrictEqual([[1, 4], [9, 16]])
  expect(algorithms.operation('m_div', [[1, 2], [3, 4]], [[1, 2], [3, 4]]))
    .toStrictEqual([[1, 1], [1, 1]])
  expect(algorithms.operation('m_exp', [[1, 2], [3, 4]], [[1, 2], [3, 4]]))
    .toStrictEqual([[1, 4], [27, 256]])
  expect(algorithms.operation('m_add', [[1, 2, 3, 4], [5, 6, 7, 8]], [[9, 10, 11, 12], [13, 14, 15, 16]]))
    .toStrictEqual([[10, 12, 14, 16], [18, 20, 22, 24]])
})

test('Rosetta Code: Emirp primes', () => {
  expect(algorithms.emirps(20, true))
    .toStrictEqual([13, 17, 31, 37, 71, 73, 79, 97, 107, 113, 149, 157, 167, 179, 199, 311, 337, 347, 359, 389])
  expect(algorithms.emirps(10000, false))
    .toStrictEqual(948349)
  expect(algorithms.emirps([7700, 8000], true))
    .toStrictEqual([7717, 7757, 7817, 7841, 7867, 7879, 7901, 7927, 7949, 7951, 7963])
  expect(algorithms.emirps([7700, 8000], false))
    .toStrictEqual(11)
})

test('Rosetta Code: Entropy', () => {
  expect(algorithms.entropy("0"))
    .toStrictEqual(0)
  expect(algorithms.entropy("01"))
    .toStrictEqual(1)
  expect(algorithms.entropy("0123"))
    .toStrictEqual(2)
  expect(algorithms.entropy("01234567"))
    .toStrictEqual(3)
  expect(algorithms.entropy("0123456789abcdef"))
    .toStrictEqual(4)
  expect(algorithms.entropy("1223334444"))
    .toStrictEqual(1.8464393446710154)
})

test('Rosetta Code: Equilibrium index', () => {
  expect(algorithms.equilibrium([-7, 1, 5, 2, -4, 3, 0]))
    .toStrictEqual([3, 6])
  expect(algorithms.equilibrium([2, 4, 6]))
    .toStrictEqual([])
  expect(algorithms.equilibrium([2, 9, 2]))
    .toStrictEqual([1])
  expect(algorithms.equilibrium([1, -1, 1, -1, 1, -1, 1]))
    .toStrictEqual([0, 1, 2, 3, 4, 5, 6])
  expect(algorithms.equilibrium([1]))
    .toStrictEqual([0])
  expect(algorithms.equilibrium([]))
    .toStrictEqual([])
})

test('Rosetta Code: Ethiopian multiplication', () => {
  expect(algorithms.eth_mult(0, 13))
    .toStrictEqual(0)
  expect(algorithms.eth_mult(13, 0))
    .toStrictEqual(0)
  expect(algorithms.eth_mult(1, 256))
    .toStrictEqual(256)
  expect(algorithms.eth_mult(256, 1))
    .toStrictEqual(256)
  expect(algorithms.eth_mult(17, 34))
    .toStrictEqual(578)
  expect(algorithms.eth_mult(23, 46))
    .toStrictEqual(1058)
  expect(algorithms.eth_mult(12, 27))
    .toStrictEqual(324)
  expect(algorithms.eth_mult(56, 98))
    .toStrictEqual(5488)
  expect(algorithms.eth_mult(63, 74))
    .toStrictEqual(4662)
})