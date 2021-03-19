package main

import (
	"fmt"
)

// Stack - Declare stack type
type Stack []int

// Method with stack receiver, returns true if empty
func (s *Stack) isEmpty() bool {
	return len(*s) == 0
}

// Method to push, appends to slice and modifies the reference
func (s *Stack) push(e int) {
	*s = append(*s, e)
}

// Pop, returns (int, bool), where int is the value and
// the bool denotes whether or not the operation was "real".
// If the stack is empty, return will be (0, false). Callers
// should check if the bool returned is true
func (s *Stack) pop() (int, bool) {
	if s.isEmpty() {
		return 0, false
	}

	index := len(*s) - 1
	element := (*s)[index]
	*s = (*s)[:index]
	return element, true
}

// Peek, returns a copy the element at the bottom of the stack
func (s *Stack) peek() (int, bool) {
	if s.isEmpty() {
		return 0, false
	}

	element := (*s)[0]
	return element, true
}

// Vars
var inputStack Stack
var outputStack Stack

// Main
func main() {
	var queries int
	_, err := fmt.Scanf("%d", &queries)

	if err != nil {
		fmt.Println("Queries not an int")
		return
	}

	for i := 0; i < queries; i++ {
		var op int
		_, err := fmt.Scanf("%d", &op)

		if err != nil {
			fmt.Println("Op not an int")
			return
		}
		switch op {
		case 1:
			var value int
			_, err := fmt.Scanf("%d", &value)

			if err != nil {
				fmt.Println("Value not an int")
				return
			}
			inputStack.push(value)
			break
		case 2:
			// TODO: Dequeue
			for inputStack.isEmpty() == false {
				value, valid := inputStack.pop()

				if valid == false {
					fmt.Printf("Weird error while dequeuing")
					return
				}

				outputStack.push(value)
			}

			outputStack.pop()

			for outputStack.isEmpty() == false {
				value, valid := outputStack.pop()

				if valid == false {
					fmt.Printf("Weird error while dequeuing")
					return
				}

				inputStack.push(value)
			}
			break
		case 3:
			value, valid := inputStack.peek()

			if valid == false {
				fmt.Println("Unable to peek at empty queue")
			} else {
				fmt.Println(value)
			}
			break
		}
	}
}
