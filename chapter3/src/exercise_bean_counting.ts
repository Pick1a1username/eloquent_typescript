function countChar(word: string, target: string): number {
  let count = 0;
  for (let pos = 0; pos <= word.length; pos++) {
    if (word[pos] == target) count += 1;
  }
  return count;
}

function countBs(word: string): number {
  return countChar(word, "B");
}
  
console.log("The number of \"B\" in \"Bob\": " + countBs("Bob"));