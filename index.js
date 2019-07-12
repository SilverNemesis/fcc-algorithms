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

module.exports = {
  findSymmetricDifference,
  updateInventory,
  permAlone,
  pairwise,
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  mergeSort
}