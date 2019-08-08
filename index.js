// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
function findSymmetricDifference() {
  const diff = (A, B) => {
    const R = new Set([])
    A.forEach((n) => {
      if (!B.has(n)) {
        R.add(n)
      }
    })
    B.forEach((n) => {
      if (!A.has(n)) {
        R.add(n)
      }
    })
    return R
  }

  let R = new Set([])

  const args = [...arguments]
  args.forEach((arg) => {
    R = diff(R, new Set(arg))
  })

  return [...R]
}

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
// Update the current existing inventory item quantities(in arr1).
// If an item cannot be found, add the new item and quantity into the inventory array.
// The returned inventory array should be in alphabetical order by item.
function updateInventory(curInv, nxtInv) {
  const inv = curInv.slice(0)
  nxtInv.forEach((newItem) => {
    const index = inv.findIndex((item) => {
      return item[1] === newItem[1]
    })
    if (index === -1) {
      inv.push(newItem)
    } else {
      inv[index][0] += newItem[0]
    }
  })
  return inv
}

// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// Assume that all characters in the provided string are each unique.
function permAlone(str) {
  const regex = /(.)\1+/g

  if (str.match(regex) !== null && str.match(regex)[0] === str) {
    return 0
  }

  const chars = str.split('')
  const perms = []

  function swap(i, j) {
    const temp = chars[i]
    chars[i] = chars[j]
    chars[j] = temp
  }

  // Heap's algorithm (https://en.wikipedia.org/wiki/Heap%27s_algorithm)
  function generate(len) {
    if (len === 1) {
      perms.push(chars.join(''))
    } else {
      for (let i = 0; i < len; i++) {
        generate(len - 1)
        if (len % 2 != 0) {
          swap(0, len - 1)
        } else {
          swap(i, len - 1)
        }
      }
    }
  }

  generate(chars.length)

  const noRepeat = perms.filter(function (perm) {
    return !perm.match(regex)
  })

  return noRepeat.length
}

// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
function pairwise(arr, arg) {
  let sum = 0
  const copy = arr.slice(0)
  const len = arr.length
  let pri
  let sec
  for (pri = 0; pri < len; pri++) {
    for (sec = pri + 1; sec < len; sec++) {
      if (copy[pri] + copy[sec] == arg) {
        sum += pri + sec
        copy[sec] = undefined
        break
      }
    }
  }
  return sum
}

// Bubble sort an array
function bubbleSort(array) {
  const swap = (i, j) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  let len = array.length
  do {
    let newLen = 0
    for (let i = 1; i < len; i++) {
      if (array[i - 1] > array[i]) {
        swap(i - 1, i)
        newLen = i
      }
    }
    len = newLen
  } while (len > 1)
  return array
}

// Selection sort an array
function selectionSort(array) {
  const swap = (i, j) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  const len = array.length
  for (let i = 0; i < len - 1; i++) {
    var min = i
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    if (min != i) {
      swap(i, min)
    }
  }
  return array
}

// Insertion sort an array
function insertionSort(array) {
  const swap = (i, j) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  const len = array.length
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
      swap(j, j - 1)
    }
  }
  return array
}

// Quick sort an array
function quickSort(array) {
  const swap = (i, j) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  const quicksort = (lo, hi) => {
    if (lo < hi) {
      const p = partition(lo, hi)
      quicksort(lo, p - 1)
      quicksort(p + 1, hi)
    }
  }
  const partition = (lo, hi) => {
    const mid = (lo + hi) / 2
    if (array[mid] < array[lo]) {
      swap(lo, mid)
    }
    if (array[hi] < array[lo]) {
      swap(lo, hi)
    }
    if (array[mid] < array[hi]) {
      swap(mid, hi)
    }
    const pivot = array[hi]
    let i = lo
    for (let j = lo; j < hi; j++) {
      if (array[j] < pivot) {
        swap(i, j)
        i++
      }
    }
    swap(i, hi)
    return i
  }
  quicksort(0, array.length - 1)
  return array
}

// Merge sort an array
function mergeSort(array) {
  const sort = (array) => {
    if (array.length === 1) {
      return array
    }
    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)
    return merge(
      sort(left),
      sort(right)
    )
  }
  const merge = (left, right) => {
    let result = []
    const leftLen = left.length
    const rightLen = right.length
    let l = 0
    let r = 0
    while (l < leftLen && r < rightLen) {
      if (left[l] < right[r]) {
        result.push(left[l])
        l++
      } else {
        result.push(right[r])
        r++
      }
    }
    return result.concat(left.slice(l)).concat(right.slice(r))
  }
  return sort(array)
}

function bfs(graph, root) {
  const queue = []
  const enqueue = (element) => {
    queue.push(element)
  }
  const dequeue = (element) => {
    return queue.shift()
  }
  const isEmpty = () => {
    return queue.length === 0
  }

  const nodeCount = graph.length
  const nodesLen = {}
  let distance = 0

  enqueue(root)

  while (!isEmpty()) {
    const nodes = []
    while (!isEmpty()) {
      nodes.push(dequeue())
    }
    nodes.forEach((node) => {
      nodesLen[node] = distance
      for (let i = 0; i < nodeCount; i++) {
        if (graph[node][i] && nodesLen[i] === undefined) {
          enqueue(i)
        }
      }
    })
    distance++
  }

  for (let i = 0; i < nodeCount; i++) {
    if (nodesLen[i] === undefined) {
      nodesLen[i] = Infinity
    }
  }

  return nodesLen
}

function dfs(graph, root) {
  const visited = []
  const explore = (graph, node) => {
    visited.push(node)
    graph[node].forEach((p, n) => {
      if (p && !visited.includes(n)) {
        explore(graph, n)
      }
    })
  }
  explore(graph, root)
  return visited
}

// Rosetta Code: 100 doors
// There are 100 doors in a row that are all initially closed. You make 100 passes by the doors.
// The first time through, visit every door and 'toggle' the door(if the door is closed, open it; if it is open, close it).
// The second time, only visit every 2nd door(i.e., door #2, #4, #6, ...) and toggle it.
// The third time, visit every 3rd door(i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.
// Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.
function getFinalOpenedDoors(numDoors) {
  const doors = []

  for (let door = 0; door < numDoors; door++) {
    doors.push(false)
  }

  for (let pass = 0; pass < numDoors; pass++) {
    for (let door = pass; door < numDoors; door += pass + 1) {
      doors[door] = doors[door] == false
    }
  }

  const results = []

  for (let door = 0; door < numDoors; door++) {
    if (doors[door]) {
      results.push(door + 1)
    }
  }

  return results
}

function solve24(numStr) {
  const chars = numStr.split('')
  const perms = []

  function swap(i, j) {
    const temp = chars[i]
    chars[i] = chars[j]
    chars[j] = temp
  }

  // Heap's algorithm (https://en.wikipedia.org/wiki/Heap%27s_algorithm)
  function generate(len) {
    if (len === 1) {
      const perm = chars.join('')
      if (!perms.includes(perm)) {
        perms.push(perm)
      }
    } else {
      for (let i = 0; i < len; i++) {
        generate(len - 1)
        if (len % 2 != 0) {
          swap(0, len - 1)
        } else {
          swap(i, len - 1)
        }
      }
    }
  }

  generate(chars.length)

  const ops = ['+', '-', '*', '/']

  let answer = undefined

  const tryEval = (perms, routine) => {
    perms.some((perm) => {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          for (let k = 0; k < 4; k++) {
            answer = routine(perm, ops, i, j, k)
            if (answer) {
              return true
            }
          }
        }
      }
    })
  }

  const simpleRoutine = (perm, ops, i, j, k) => {
    const exp = perm[0] + ops[i] + perm[1] + ops[j] + perm[2] + ops[k] + perm[3]
    if (eval(exp) == 24) {
      return exp
    }
  }

  const parenRoutine = (perm, ops, i, j, k) => {
    const exp = '(' + perm[0] + ops[i] + perm[1] + ')' + ops[j] + '(' + perm[2] + ops[k] + perm[3] + ')'
    if (eval(exp) == 24) {
      return exp
    }
  }

  /*
  const parenRoutine2 = (perm, ops, i, j, k) => {
    const exp = perm[0] + ops[i] + '(' + perm[1] + ops[j] + '(' + perm[2] + ops[k] + perm[3] + '))'
    if (eval(exp) == 24) {
      return exp
    }
  }

  const parenRoutine3 = (perm, ops, i, j, k) => {
    const exp = '((' + perm[0] + ops[i] + perm[1] + ')' + ops[j] + perm[2] + ')' + ops[k] + perm[3]
    if (eval(exp) == 24) {
      return exp
    }
  }

  const parenRoutine4 = (perm, ops, i, j, k) => {
    const exp = '(' + perm[0] + ops[i] + '(' + perm[1] + ops[j] + perm[2] + '))' + ops[k] + perm[3]
    if (eval(exp) == 24) {
      return exp
    }
  }
  */

  tryEval(perms, simpleRoutine)
  if (answer) {
    return answer
  }

  tryEval(perms, parenRoutine)
  if (answer) {
    return answer
  }
}

function numberOfNames(num) {
  const table = []
  const partition = (sum, max) => {
    if (max == 0) {
      return 0
    } else if (sum == 0) {
      return 1
    } else if (sum < 0) {
      return 0
    }

    const index = sum * 200 + max

    if (sum < 200 && max < 200) {
      if (table[index])
        return table[index]
      else {
        table[index] = partition(sum, max - 1) + partition(sum - max, max)
        return table[index]
      }
    } else {
      return partition(sum, max - 1) + partition(sum - max, max)
    }
  }

  return partition(num, num - 1) + 1
}

function canMakeWord(word) {
  const blocks = [
    ['B', 'O'],
    ['X', 'K'],
    ['D', 'Q'],
    ['C', 'P'],
    ['N', 'A'],
    ['G', 'T'],
    ['R', 'E'],
    ['T', 'G'],
    ['Q', 'D'],
    ['F', 'S'],
    ['J', 'W'],
    ['H', 'U'],
    ['V', 'I'],
    ['A', 'N'],
    ['O', 'B'],
    ['E', 'R'],
    ['F', 'S'],
    ['L', 'Y'],
    ['P', 'C'],
    ['Z', 'M']
  ]
  const used = []
  const letters = [...word.toUpperCase()]
  const result = letters.some((letter) => {
    const index = blocks.findIndex((block, i) => {
      return (block[0] == letter || block[1] == letter) && !used.includes(i)
    })
    if (index == -1) {
      return true
    }
    used.push(index)
  })
  return !result
}

function getDPA(num) {
  let a = 0, d = 0, p = 0
  const sums = new Array(num + 1).fill(0)
  for (let divisor = 1; divisor <= num / 2; divisor++) {
    for (let i = divisor + divisor; i <= num; i += divisor) {
      sums[i] += divisor
    }
  }
  for (let i = 1; i <= num; i++) {
    if (sums[i] < i) {
      d++
    } else if (sums[i] > i) {
      a++
    } else {
      p++
    }
  }
  return [d, p, a]
}

function accumulator(sum) {
  return function (value) {
    sum += value
    return sum
  }
}

function ack(m, n) {
  if (m === 0) {
    return n + 1
  } else if (n == 0) {
    return ack(m - 1, 1)
  } else if (m > 0 && n > 0) {
    return ack(m - 1, ack(m, n - 1))
  }
}

function formatText(input, justification) {
  const columnWidths = []
  input.forEach((row) => {
    const cols = row.split('$')
    cols.forEach((col, i) => {
      const len = col.length
      if (!columnWidths[i] || len > columnWidths[i]) {
        columnWidths[i] = len
      }
    })
  })

  const lines = []
  input.forEach((row, j) => {
    const cols = row.split('$')
    line = []
    cols.forEach((col, i) => {
      const len = col.length
      let cell
      if (len > 0) {
        const wid = columnWidths[i]
        switch (justification) {
          case 'right':
            cell = col.padStart(wid, ' ')
            break
          case 'left':
            cell = col.padEnd(wid, ' ')
            break
          case 'center':
            const beg = (wid - len) / 2
            cell = col.padStart(beg + len, ' ').padEnd(wid, ' ')
            break
        }
      }
      line.push(cell)
    })
    lines.push(line.join(' '))
  })
  return lines.join('\n')
}

function amicablePairsUpTo(maxNum) {
  function getSums(num) {
    const sums = new Array(num + 1).fill(0)
    for (let divisor = 1; divisor <= num / 2; divisor++) {
      for (let i = divisor + divisor; i <= num; i += divisor) {
        sums[i] += divisor
      }
    }
    return sums
  }

  const sums = getSums(maxNum)
  const pairs = []
  for (let i = 1; i <= maxNum; i++) {
    const s = sums[i]
    if (s !== i && sums[s] === i) {
      if (!pairs.some((v) => v[0] === s && v[1] === i)) {
        pairs.push([i, s])
      }
    }
  }
  return pairs
}

function mode(arr) {
  let frequency = new Map()
  let maxFreq = 0
  arr.forEach((value) => {
    let freq = frequency.get(value)
    if (freq) {
      freq++
    } else {
      freq = 1
    }
    if (freq > maxFreq) {
      maxFreq = freq
    }
    frequency.set(value, freq)
  })
  const results = []
  frequency.forEach((value, key) => {
    if (value === maxFreq) {
      results.push(key)
    }
  })
  return results
}

function pythagoreanMeans(rangeArr) {
  const n = rangeArr.length
  const A = rangeArr.reduce((acc, cur) => acc + cur) / n
  const G = Math.pow(rangeArr.reduce((acc, cur) => acc * cur), 1 / n)
  const H = n / rangeArr.reduce((acc, cur) => acc + 1 / cur, 0)
  return {
    values: {
      Arithmetic: A,
      Geometric: G,
      Harmonic: H
    },
    test: 'is A >= G >= H ? ' + (A >= G && G >= H ? 'yes' : 'no')
  }
}

function rms(arr) {
  const n = arr.length
  return Math.sqrt(arr.reduce((acc, cur) => acc + cur * cur, 0) / n)
}

function babbage(babbageNum, endDigits) {
  let answer = 0
  for (let i = babbageNum; i > 0; i--) {
    if ((i * i) % 1000000 === endDigits) {
      answer = i
    }
  }
  return answer
}

function isBalanced(str) {
  let level = 0
  const len = str.length
  for (let i = 0; i < len; i++) {
    if (str[i] == '[') {
      level++
    } else if (str[i] == ']') {
      level--
      if (level < 0) {
        return false;
      }
    } else {
      return false
    }
  }
  return level === 0
}

function getCircles(...args) {
  const p1 = args[0]
  const p2 = args[1]
  const r = args[2]
  const d = Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]))
  if (d === 0) {
    if (r === 0) {
      return 'Radius Zero'
    } else {
      return 'Coincident point.Infinite solutions'
    }
  } else if (d > r * 2) {
    return 'No intersection.Points further apart than circle diameter'
  } else if (d === r * 2) {
    return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2]
  }

  p3 = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2]

  return [
    [Number((p3[0] + Math.sqrt(r * r - (d / 2) * (d / 2)) * (p1[1] - p2[1]) / d).toFixed(4)), Number((p3[1] + Math.sqrt(r * r - (d / 2) * (d / 2)) * (p2[0] - p1[0]) / d).toFixed(4))],
    [Number((p3[0] - Math.sqrt(r * r - (d / 2) * (d / 2)) * (p1[1] - p2[1]) / d).toFixed(4)), Number((p3[1] - Math.sqrt(r * r - (d / 2) * (d / 2)) * (p2[0] - p1[0]) / d).toFixed(4))]
  ]
}

module.exports = {
  findSymmetricDifference,
  updateInventory,
  permAlone,
  pairwise,
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  mergeSort,
  bfs,
  dfs,
  getFinalOpenedDoors,
  solve24,
  numberOfNames,
  canMakeWord,
  getDPA,
  accumulator,
  ack,
  formatText,
  amicablePairsUpTo,
  mode,
  pythagoreanMeans,
  rms,
  babbage,
  isBalanced,
  getCircles
}