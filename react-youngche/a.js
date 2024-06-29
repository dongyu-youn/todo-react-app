function solution(phone_book) {
  let arr = [];
  let short = Math.min(...phone_book.map((str) => str.length)); // Find the minimum length
  for (let i = 0; i < phone_book.length; i++) {
    arr.push(phone_book[i].slice(0, short)); // Use slice() instead of splice()
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        // Use strict equality (===) for comparison
        return false;
      }
    }
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
