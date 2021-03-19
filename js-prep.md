# Javascript Coding Interview Prep

This document is an attempt to prep some good code examples and quick tips for when I do my AWS coding
exercise as part of their interview process. The plan is to go over some of the most important data
structures and algorithms, as well as include/link to good idiomatic examples of how to approach
using them in the JS world.

## Quick Success Path For Timed Problems

1. Read the problem fully.
2. Read the problem fully, a second time.
  - Seriously, literally everything depends on this
3. Understand the output format/results expected.
  - Are you sure you understand?
  - Seriously, are you sure?
4. Immediately handle base cases/early validation, e.g.:
  - `if (!input) return -1; // or whatever`
  - `if (input === 1) return "yourmom"; // or whatever`
5. Sketch out the algorithm/solution
  - Write the skeleton, read through to make sure it makes sense
  - Read a second time to check for mistakes
    - Double check boolean logic and indexing of any kind!!!
    - Triple check accessors and index numbers/calculations!!!!!!
6. Fill in specific cases
7. Test
  - Debug, fix errors, repeat
8. Be prepared to realize you didn't understand something correctly.

## Potential Courses
- https://www.educative.io/courses/mastering-data-structures-and-sorting-algorithms-in-javascript
- https://www.educative.io/courses/data-structures-coding-interviews-javascript

## Sources used while planning
- https://levelup.gitconnected.com/essential-data-structures-and-algorithms-for-coding-interviews-a283c755b304
- https://www.geeksforgeeks.org/top-10-algorithms-in-interview-questions/#algo6

## Tips during interview

1. Always read the problem fully before starting. It's way too easy to get tripped up on stupid
   details that you overlooked. Read the problem a few times and think about it for a minute or
   two at least before starting. Never think "Oh I know this one" before you've even finished
   reading the problem completely.

2. Typically you will be asked to implement a function of some kind. Make sure you _understand the expected return value_ of the function before you start. If there's no penalty for it, go ahead and
submit the empty function body they give you before you even start coding. It may show you some sort
of expected vs. actual values for a set of simple tests that can help highlight exactly what you
need to be returning here

3. Always check for error conditions even if the problem doesn't specify. Always make sure the array
has elements before you start searching. Make sure that midpoint you calculated is above -1. And make
sure you keep in mind whatever sentinel value you are supposed to be returning for errors or failed
searches or whatever it is.

4. Have a couple utility functions for testing ready to go. Add simple test cases to your test as you
add logic. You want to develop the tests as you go so that you can easily make sure your various cases
are working as you expect later. Approaching problems this way may take some effort, but it will
definitely help you submit more correct solutions, just like in the real world. The more you practice
this, the better you will get at incorporating it into your workflow.

## Hash Tables

### Intro

Hash tables are essential in coding interviews, and you will use them many times during the job hunt. 

We frequently see hash tables for two reasons:
  - Hash tables are often the best tool to optimize a solution
  - Hash tables enable us to write very readable code

Hash tables are a flexible data structure that allow us to store items using key-value pairs which are very fast at O(1) time and also make our code more intuitive. If you ever need to optimize a question, always consider if a hash table could be used.

Hash tables can be combined with any other data structure, from arrays to graphs, and can seamlessly integrate and improve code. We also see hash tables used in more advanced topics like dynamic programming. The downside is that hash tables aren’t (typically) ordered which is why they are often combined with other data structures.

### Main Source

https://www.educative.io/blog/data-strucutres-hash-table-javascript

### Useful Blurbs

A hash table (often called a hash map) is a data structure that maps keys to values. Hash tables combine lookup, insert, and delete operations in an efficient way. The key is sent to a hash function that performs arithmetic operations on it. The result (called the hash value or hash) is an index of the key-value pair.

Note: In JavaScript, hash tables are generally implemented using arrays as they provide access to elements in constant time.

### When to use

- Search for complex elements in constant time
- Searching/dealing with large amounts of data
- Database indexing
- Caches
- Unique data representation
- Lookup in an unsorted array
- Lookup in sorted array using binary search

Note: Hashing and trees perform similar jobs. Trees are more useful when you need to order data in a
specific sequence. Hash tables are better for randomly sorted data due to its key-value pair organization.
Hash tables also work in constant time, whereas trees usually work in O(logn). Hash tables can get as low
as O(n) though. An AVL tree would maintain O(logn) in the worst case.

### Raw Code Examples

Constructor
```
class HashTable {
 constructor() {
   this.values = {};
   this.length =  0;
   this.size =  0;
 }
}
```

Hash Function
```
calculateHash(key) {
 return key.toString().length % this.size;
}
```

Insert
```
add(key, value) {
  const hash = this.calculateHash(key);
  if (!this.values.hasOwnProperty(hash)) {
     this.values[hash] = {};
  }
  if (!this.values[hash].hasOwnProperty(key)) {
     this.length++;
  }
  this.values[hash][key] = value;
}
```

Searching
```
search(key) {
  const hash = this.calculateHash(key);
  if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    return this.values[hash][key];
  } else {
    return null;
  }
}
```

### Common Interview Question Signs

- Implement insertion, delete, and search
- Check if arrays are disjointed
- Find symmetric pair in an array
- Find two pairs such that a+b = c+da+b=c+d
- Find two numbers that add up to “value”
- Remove duplicates from a Linked List using hash tables
- How to insert a new value to a hash key that is already occupied

### Further Investigation
1. What is Dynamic Programming?
  - https://www.geeksforgeeks.org/dynamic-programming/
  - https://davidguandev.medium.com/introduction-to-dynamic-programming-with-examples-bc04dca3ccee

2. What are AVL trees?
  - https://www.geeksforgeeks.org/avl-tree-set-1-insertion/
  - Need to find javascript example when the time comes

## Recursion

Most important part about recursion is the need for a base case and a recursive case.

Notes:
- Recursion adds O(n) space from the call stack
- Look into tail-call optimization
- Look into dynamic programming
- Memoization can be used to cache results

## Sorting

Quick Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

- Don't memorize sorting algorithms
- Learn sorting methods from std library
- Understand implications of sorting
- Assume sorting takes O(n log n) time
- Be able to sort any array containing any type of data

### Javascript specific notes

- The Array type has a `.sort()` method
- The `.sort()` method in javascript happens *in place* and will modify the array without making a copy
- You can pass a comparison function to the `.sort()` method, e.g. `stuff.sort((a, b) => /* something */ )`
  - If omitted the values will be converted `.toString()` and then sorted based on unicode point values
  - By default, `undefined` elements will be sorted to the end of the array.
  - Return values of compareFunction:
    - Less than 0: order of a and b remains the same
    - 0: a and b considered equal, but will be sorted against other values
    - Greater than 0: sort b before a
- Map can be used to computer derived values for sorting once before the sort runs
  - For example, it may be better to compute something like `obj.sortKey = obj.name.toLower()` before
    running a sort, rather than performing that operation during the sort. If you perform it as part of
    the compareFunction, it will run many times for the same element. With a large array this could
    add significant overhead

#### Code Snippets

Sort numbers ascending
```
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]
```

Sorting Non-ASCII characters
```
var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

## Trees

- Understand construction using nodes
- Understand tree traversal
- Pre-order, post-order, in-order traversal

## Graphs (and traversals)

- More common than trees in interviews
- Count Islands interview question (2D array)
- Depth-first search (stack)
- Breadth-first search (queue)

## Binary Search and O(log n) time

- Often hinted at or indirectly needed
- Requires sorted data
- O(log n)
- Need to be able to implement from scratch
- Recognize that sorted input is a good hint to use binary search

## Linked Lists

- Iteration after being given a head node
- Delete or insert an item
- Manage multiple pointers (What does this mean?)
- Runner technique (need to research this)

### Common interview questions

- Reverse a linked list
- Delete an item from the tail
- Find an item
- Determine duplicated
- Determine if there is a cycle
- Merge multiple linked lists

## Pointer Management
## Stacks and queues

## Arrays

### Debugging

This could/should be useful for understanding what's in an array,
especially a multi-dimensional array. This might be useful for other
data structures as well.
```
console.table(array)
```

### Iteration

Naive
```
for (index = 0; index < array.length; index++) { 
    console.log(array[index]); 
} 
```

forEach/lambda
```
array.forEach(e => console.log(e));
```

### Splicing

Remove 0 elements before index 2, insert new element
```
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

Remove 0 elements before index 2, insert 2 new elements
```
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar)

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

Remove 1 element at index 3
```
let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
```

Remove 1 element at index 2, insert "trumpet"
```
let myFish = ['angel', 'clown', 'drum', 'sturgeon']
let removed = myFish.splice(2, 1, 'trumpet')

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
```

Remove 2 elements, starting from index 2
```
let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed = myFish.splice(2, 2)

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
```

Remove 1 element from index -2
```
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1)

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
```

Remove all elements, starting from index 2
```
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
```

### Sorting

See the Sorting section above

Quick Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

## Quick Tips

- Number of "windows" of size M in array of size N
  - N < M : 0
  - N == M : 1
  - N > M : (N - M) + 1
    - Example: # of windows of size 2 in array of size 5
      - [x] [x] [] [] []
      - [] [x] [x] [] []
      - [] [] [x] [x] []
      - [] [] [] [x] [x]
      - (5 - 2) + 1 = 4

### Sum of Series from 1 to N

- Formula: n(n+1)/2

### Sum of first N terms of any series

To find the sum of the first n terms of an arithmetic sequence use the formula,
`Sn=n(a1 + an)/2` 
where n is the number of terms, *a1* is the first term and *an* is the last term.
