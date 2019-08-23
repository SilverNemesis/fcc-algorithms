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
    let min = i
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
        return false
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
      return 'Coincident point. Infinite solutions'
    }
  } else if (d > r * 2) {
    return 'No intersection. Points further apart than circle diameter'
  } else if (d === r * 2) {
    return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2]
  }

  const p3 = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2]

  return [
    [Number((p3[0] + Math.sqrt(r * r - (d / 2) * (d / 2)) * (p1[1] - p2[1]) / d).toFixed(4)), Number((p3[1] + Math.sqrt(r * r - (d / 2) * (d / 2)) * (p2[0] - p1[0]) / d).toFixed(4))],
    [Number((p3[0] - Math.sqrt(r * r - (d / 2) * (d / 2)) * (p1[1] - p2[1]) / d).toFixed(4)), Number((p3[1] - Math.sqrt(r * r - (d / 2) * (d / 2)) * (p2[0] - p1[0]) / d).toFixed(4))]
  ]
}

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

function getClosestPair(pointsArr) {
  const N = pointsArr.length

  if (N < 2) {
    return Infinity
  }

  function calcDistance(i, j) {
    const x = pointsArr[i].getX() - pointsArr[j].getX()
    const y = pointsArr[i].getY() - pointsArr[j].getY()
    return x * x + y * y
  }

  let minDistance = calcDistance(0, 1)
  let minPoints = [0, 1]

  for (let i = 1; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const dist = calcDistance(i, j)
      if (dist < minDistance) {
        minDistance = dist
        minPoints = [i, j]
      }
    }
  }

  const answer = {
    distance: Math.sqrt(minDistance),
    pair: [
      pointsArr[minPoints[0]],
      pointsArr[minPoints[1]]
    ]
  }

  function flip(answer) {
    const temp = answer.pair[0]
    answer.pair[0] = answer.pair[1]
    answer.pair[1] = temp
  }

  if (answer.pair[0].getX() > answer.pair[1].getX()) {
    flip(answer)
  } else if (answer.pair[0].getX() === answer.pair[1].getX()) {
    if (answer.pair[0].getY() > answer.pair[1].getY()) {
      flip(answer)
    }
  }

  return answer
}

function combinations(m, n) {
  const index = new Array(m)
  const max = new Array(m)

  for (let i = 0; i < m; i++) {
    index[i] = i
    max[i] = n - m + i
  }

  const results = []
  let c = true
  while (c) {
    results.push([...index])
    let i = m - 1
    index[i]++
    if (index[i] > max[i]) {
      for (; i >= 0; i--) {
        if (index[i] < max[i]) {
          break
        }
      }
      if (i === -1) {
        c = false
      } else {
        index[i]++
        for (i = i + 1; i < m; i++) {
          index[i] = index[i - 1] + 1
        }
      }
    }
  }

  return results
}

function quibble(words) {
  const n = words.length
  if (n == 0) {
    return '{}'
  } else if (n == 1) {
    return '{' + words[0] + '}'
  } else if (n == 2) {
    return '{' + words[0] + ' and ' + words[1] + '}'
  } else {
    return '{' + words.slice(0, n - 1).join(',') + ' and ' + words[n - 1] + '}'
  }
}

function allEqual(arr) {
  const n = arr.length
  for (let i = 1; i < n; i++) {
    if (arr[0] !== arr[i]) {
      return false
    }
  }
  return true
}

function azSorted(arr) {
  const n = arr.length
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] >= arr[i]) {
      return false
    }
  }
  return true
}

function convertSeconds(sec) {
  const s = sec % 60
  const m = Math.floor(sec / 60) % 60
  const h = Math.floor(sec / 3600) % 24
  const d = Math.floor(sec / 86400) % 7
  const w = Math.floor(sec / 604800)
  let answer
  function append(value, units) {
    if (value > 0) {
      if (answer) {
        answer += ', ' + value + ' ' + units
      } else {
        answer = value + ' ' + units
      }
    }
  }
  append(w, 'wk')
  append(d, 'd')
  append(h, 'hr')
  append(m, 'min')
  append(s, 'sec')
  return answer
}

function countSubstring(str, subStr) {
  const l = subStr.length
  let count = 0
  let index = 0
  while (true) {
    index = str.indexOf(subStr, index)
    if (index === -1) {
      break
    }
    index += l
    count++
  }
  return count
}

function countCoins(amount) {
  const mq = Math.floor(amount / 25)
  const md = Math.floor(amount / 10)
  const mn = Math.floor(amount / 5)

  let count = 0
  for (let q = 0; q <= mq; q++) {
    for (let d = 0; d <= md; d++) {
      if (q * 25 + d * 10 > amount) {
        continue
      }
      for (let n = 0; n <= mn; n++) {
        if (q * 25 + d * 10 + n * 5 > amount) {
          continue
        }
        count++
      }
    }
  }
  return count
}

function cramersRule(matrix, freeTerms) {
  function det(M) {
    if (M.length == 2) {
      return (M[0][0] * M[1][1]) - (M[0][1] * M[1][0])
    }
    let answer = 0
    for (let i = 0; i < M.length; i++) {
      answer += Math.pow(-1, i) * M[0][i] * det(minor(M, 0, i))
    }
    return answer
  }

  function minor(M, i, j) {
    return [...M.slice(0, i), ...M.slice(i + 1)].map(row => [...row.slice(0, j), ...row.slice(j + 1)])
  }

  function replaceColumn(M, index, col) {
    const N = M.map(row => [...row])
    const n = N.length
    for (let i = 0; i < n; i++) {
      N[i][index] = col[i]
    }
    return N
  }

  const d = det(matrix)
  const answer = []
  const n = matrix.length
  for (let i = 0; i < n; i++) {
    answer.push(det(replaceColumn(matrix, i, freeTerms)) / d)
  }
  return answer
}

function getDateFormats(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  if (!date) {
    date = new Date()
  }
  return [
    date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0'),
    days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
  ]
}

function add12Hours(dateString) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const c = dateString.toUpperCase().split(' ')
  const tc = c[3].split(':')
  tc[2] = tc[1].slice(-2)
  tc[1] = tc[1].slice(0, -2)
  if (tc[2] == 'PM') {
    tc[0] = (Number(tc[0]) + 12).toString()
  }
  const origDateString = c[0] + ' ' + c[1] + ' ' + c[2] + ' ' + tc[0] + ':' + tc[1] + ' ' + c[4]
  const origDate = new Date(origDateString)
  let date = new Date(origDate.getTime() + 12 * 60 * 60 * 1000)
  const offset = (date.getTimezoneOffset() - new Date().getTimezoneOffset()) * 60 * 1000
  date = new Date(date.getTime() + offset)
  let h = date.getHours()
  let ap = 'am'
  if (h > 12) {
    h -= 12
    ap = 'pm'
  }
  return months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear() + ' ' + h + ':' + date.getMinutes() + ap + ' EST'
}

function findXmasSunday(start, end) {
  const answer = []
  for (let year = start; year <= end; year++) {
    const date = new Date(year + '-12-25 12:00')
    if (date.getDay() === 0) {
      answer.push(year)
    }
  }
  return answer
}

const cards = ['AC', 'AD', 'AH', 'AS', '2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9C', '9D', '9H', '9S', 'TC', 'TD', 'TH', 'TS', 'JC', 'JD', 'JH', 'JS', 'QC', 'QD', 'QH', 'QS', 'KC', 'KD', 'KH', 'KS']

function dealFreeCell(seed) {
  let state = seed

  function getRandom() {
    state = (214013 * state + 2531011) & 2147483647
    return Math.floor(state / 65536)
  }

  function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  let deck = cards.slice(0)
  let deckLen = deck.length
  const game = []
  while (deckLen > 0) {
    const hand = []
    for (let i = 0; i < 8 && deckLen > 0; i++) {
      const cardIndex = getRandom() % deckLen
      swap(deck, cardIndex, deckLen - 1)
      const card = deck.pop()
      deckLen = deck.length
      hand.push(card)
    }
    game.push(hand)
  }
  return game
}

function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

class Num {
  constructor(n) {
    if (isNaN(Number(n))) {
      throw TypeError('Not a Number')
    }
    if (n < 1 || n > 10) {
      throw TypeError('Out of range')
    }
    this._value = n
  }
  valueOf() {
    return this._value
  }
  toString() {
    return this._value.toString()
  }
}

function departments(possibleNumbers, total) {
  const answer = []
  const len = possibleNumbers.length
  for (let i = 0; i < len; i++) {
    if (possibleNumbers[i] % 2 === 1) {
      continue;
    }
    for (let j = 0; j < len; j++) {
      if (j === i) {
        continue;
      }
      for (let k = 0; k < len; k++) {
        if (k === i || k === j) {
          continue;
        }
        if (possibleNumbers[i] + possibleNumbers[j] + possibleNumbers[k] === total) {
          answer.push([possibleNumbers[i], possibleNumbers[j], possibleNumbers[k]])
        }
      }
    }
  }
  return answer
}

function discordianDate(date) {
  const seasons = ['Chaos', 'Discord', 'Confusion', 'Bureaucracy', 'The Aftermath']
  const days = ['Sweetmorn', 'Boomtime', 'Pungenday', 'Prickle-Prickle', 'Setting Orange']
  const holyDays = {
    'Chaos 5': 'Mungday',
    'Chaos 50': 'Chaoflux',
    'Discord 5': 'Mojoday',
    'Discord 50': 'Discoflux',
    'Confusion 5': 'Syaday',
    'Confusion 50': 'Confuflux',
    'Bureaucracy 5': 'Zaraday',
    'Bureaucracy 50': 'Bureflux',
    'The Aftermath 5': 'Maladay',
    'The Aftermath 50': 'Afflux'
  }

  function getOrdinalSuffix(number) {
    const lastDigit = number % 10
    const nextDigit = (number / 10) % 10
    if (nextDigit === 1) {
      return 'th'
    } else {
      switch (lastDigit) {
        case 1:
          return 'st'
        case 2:
          return 'nd'
        case 3:
          return 'rd'
        default:
          return 'th'
      }
    }
  }

  const refYear = date.getFullYear()
  const refDay = Math.floor((date.getTime() - (new Date(refYear + '-01-01')).getTime()) / 86400000)
  const yold = refYear + 1166
  const season = seasons[Math.floor(refDay / 73)]
  const leap = (refYear % 4) == 0
  const dayOfSeason = (leap && refDay > 59 ? (refDay - 1) : refDay) % 73 + 1
  const dayOfWeek = days[(leap && refDay > 59 ? (refDay - 1) : refDay) % 5]
  let holiday = ''
  if (leap && refDay === 59) {
    holiday = '. Celebrate St. Tib\'s Day!'
  } else if (holyDays[season + ' ' + dayOfSeason]) {
    holiday = '. Celebrate ' + holyDays[season + ' ' + dayOfSeason] + '!'
  }
  return dayOfWeek + ', the ' + dayOfSeason + getOrdinalSuffix(dayOfSeason) + ' day of ' + season + ' in the YOLD ' + yold + holiday
}

function operation(op, arr1, arr2) {
  const n = arr1.length
  const m = arr1[0].length
  const answer = new Array(n)
  for (let i = 0; i < n; i++) {
    answer[i] = new Array(m)
  }
  switch (op) {
    case 'm_add':
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          answer[i][j] = arr1[i][j] + arr2[i][j]
        }
      }
      break
    case 's_add':
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          answer[i][j] = arr1[i][j] + arr2
        }
      }
      break
    case 'm_sub':
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          answer[i][j] = arr1[i][j] - arr2[i][j]
        }
      }
      break
    case 'm_mult':
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          answer[i][j] = arr1[i][j] * arr2[i][j]
        }
      }
      break
    case 'm_div':
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          answer[i][j] = arr1[i][j] / arr2[i][j]
        }
      }
      break
    case 'm_exp':
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          answer[i][j] = arr1[i][j] ** arr2[i][j]
        }
      }
      break
  }
  return answer
}

function emirps(num, show) {
  function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
      return false
    }
    if (n % 2 == 0) {
      return (n == 2)
    }
    if (n % 3 == 0) {
      return (n == 3)
    }
    const m = Math.sqrt(n)
    for (let i = 5; i <= m; i += 6) {
      if (n % i == 0) {
        return false
      }
      if (n % (i + 2) == 0) {
        return false
      }
    }
    return true
  }

  function reverse(n) {
    return Number(n.toString().split('').reverse().join(''))
  }

  let low = 0
  let high = Number.MAX_SAFE_INTEGER
  let cnt = 0
  if (Array.isArray(num)) {
    low = num[0]
    high = num[1]
  } else {
    cnt = num
  }

  if (show) {
    const answer = []
    for (let i = low; i <= high; i++) {
      if (isPrime(i)) {
        const j = reverse(i)
        if (j !== i && isPrime(j)) {
          answer.push(i)
          if (cnt !== 0 && answer.length === cnt) {
            break
          }
        }
      }
    }
    return answer
  } else {
    let answer = 0
    let count = 0
    for (let i = low; i <= high; i++) {
      if (isPrime(i)) {
        const j = reverse(i)
        if (j !== i && isPrime(j)) {
          if (cnt === 0) {
            answer++
          } else {
            answer = i
            if (++count === cnt) {
              break
            }
          }
        }
      }
    }
    return answer
  }
}

function entropy(s) {
  const N = s.length
  const m = new Map()
  for (let i = 0; i < N; i++) {
    if (m.has(s[i])) {
      m.set(s[i], m.get(s[i]) + 1)
    } else {
      m.set(s[i], 1)
    }
  }
  let sum = 0
  for (let count of m.values()) {
    sum += count / N * Math.log2(count / N)
  }
  if (sum === 0) {
    return 0
  }
  return -sum
}

function equilibrium(a) {
  const answer = []
  const n = a.length
  if (n > 0) {
    const total = a.reduce((acc, val) => {
      return acc + val
    })
    let sum = 0
    for (let i = 0; i < n; i++) {
      if (sum === (total - a[i]) / 2) {
        answer.push(i)
      }
      sum += a[i]
    }
  }
  return answer
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
  getCircles,
  getClosestPair,
  combinations,
  quibble,
  allEqual,
  azSorted,
  convertSeconds,
  countSubstring,
  countCoins,
  cramersRule,
  getDateFormats,
  add12Hours,
  findXmasSunday,
  dealFreeCell,
  deepcopy,
  Num,
  departments,
  discordianDate,
  operation,
  emirps,
  entropy,
  equilibrium
}