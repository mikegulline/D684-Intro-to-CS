# Sorting Algorithms in JavaScript

This directory contains implementations of common sorting algorithms in JavaScript. Each file provides an efficient way to sort an array and includes performance considerations.

## 📌 Contents

1. [Bubble Sort](#bubble-sort)
2. [Heap Sort](#heap-sort)
3. [Insertion Sort](#insertion-sort)
4. [Merge Sort](#merge-sort)
5. [Quick Sort](#quick-sort)
6. [Radix Sort](#radix-sort)
7. [Selection Sort](#selection-sort)

---

## Bubble Sort

📄 **File:** [bubble-sort.js](./bubble-sort.js)

📖 **Description:**  
Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if necessary. It is inefficient for large datasets but easy to implement.

📊 **Big O Complexity:**

| Case         | Time Complexity       | Space Complexity |
| ------------ | --------------------- | ---------------- |
| Worst Case   | O(n²)                 | O(1)             |
| Average Case | O(n²)                 | O(1)             |
| Best Case    | O(n) (already sorted) | O(1)             |

---

## Heap Sort

📄 **File:** [heap-sort.js](./heap-sort.js)

📖 **Description:**  
Heap Sort is a comparison-based sorting algorithm that uses a **binary heap** to sort elements efficiently. It is not a stable sort but is useful when **constant-time access to the largest element** is needed.

📊 **Big O Complexity:**

| Case         | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Worst Case   | O(n log n)      | O(1)             |
| Average Case | O(n log n)      | O(1)             |
| Best Case    | O(n log n)      | O(1)             |

---

## Insertion Sort

📄 **File:** [insertion-sort.js](./insertion-sort.js)

📖 **Description:**  
Insertion Sort builds the sorted list one element at a time, inserting each item into its correct position. It works well for small or nearly sorted datasets but is inefficient for large inputs.

📊 **Big O Complexity:**

| Case         | Time Complexity       | Space Complexity |
| ------------ | --------------------- | ---------------- |
| Worst Case   | O(n²)                 | O(1)             |
| Average Case | O(n²)                 | O(1)             |
| Best Case    | O(n) (already sorted) | O(1)             |

---

## Merge Sort

📄 **File:** [merge-sort.js](./merge-sort.js)

📖 **Description:**  
Merge Sort is a **divide-and-conquer** algorithm that recursively splits the array into halves, sorts each half, and merges them back together. It is **stable** and works well for large datasets.

📊 **Big O Complexity:**

| Case         | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Worst Case   | O(n log n)      | O(n)             |
| Average Case | O(n log n)      | O(n)             |
| Best Case    | O(n log n)      | O(n)             |

---

## Quick Sort

📄 **File:** [quick-sort.js](./quick-sort.js)

📖 **Description:**  
Quick Sort is an efficient **divide-and-conquer** sorting algorithm. It selects a pivot, partitions the array into two halves, and recursively sorts them. It is one of the fastest sorting algorithms for large datasets.

📊 **Big O Complexity:**

| Case         | Time Complexity          | Space Complexity |
| ------------ | ------------------------ | ---------------- |
| Worst Case   | O(n²) (bad pivot choice) | O(log n)         |
| Average Case | O(n log n)               | O(log n)         |
| Best Case    | O(n log n)               | O(log n)         |

---

## Radix Sort

📄 **File:** [radix-sort.js](./radix-sort.js)

📖 **Description:**  
Radix Sort is a **non-comparative sorting algorithm** that works by sorting numbers digit by digit. It is very efficient for **sorting large numbers**.

📊 **Big O Complexity:**

| Case         | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Worst Case   | O(nk)           | O(n + k)         |
| Average Case | O(nk)           | O(n + k)         |
| Best Case    | O(nk)           | O(n + k)         |

---

## Selection Sort

📄 **File:** [selection-sort.js](./selection-sort.js)

📖 **Description:**  
Selection Sort repeatedly finds the minimum element from the unsorted portion and moves it to the beginning. It is **not efficient for large datasets** but requires minimal swaps.

📊 **Big O Complexity:**

| Case         | Time Complexity        | Space Complexity |
| ------------ | ---------------------- | ---------------- |
| Worst Case   | O(n²)                  | O(1)             |
| Average Case | O(n²)                  | O(1)             |
| Best Case    | O(n²) (already sorted) | O(1)             |

---
