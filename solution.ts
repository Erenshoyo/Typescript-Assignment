//Problem 1

function filterEvenNumbers(nums: number[]) {
  const evenNumbers: number[] = nums.filter((num) => num % 2 === 0);
  return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//Problem 2

function reverseString(input: string) {
  let stringReversed = "";
  for (let i = input.length - 1; i >= 0; i--) {
    stringReversed += input[i];
  }
  return stringReversed;
}

console.log(reverseString("Typescript"));

//Problem 3

type StringNumber = string | number;
// Sample Input 1:
function checkType(input: StringNumber) {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}

console.log(checkType("Hello"));
console.log(checkType(42));


//Problem 4


// // Sample Input:
// const user = { id: 1, name: "John Doe", age: 21 };
// getProperty(user, "name");

// // Sample Output:
// "John Doe";

// //Problem 5

// // Sample Input:
// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// toggleReadStatus(myBook);

// // Sample Output:
// {
//   title: "TypeScript Guide",
//   author: "Jane Doe",
//   publishedYear: 2024,
//   isRead: true
// }

// //Problem 6

// // Sample Input:
// const student = new Student("Alice", 20, "A");
// student.getDetails();

// // Sample Output:
// "Name: Alice, Age: 20, Grade: A";

// //Problem 7

// // Sample Input:
// getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

// // Sample Output:
// [3, 4, 5]
