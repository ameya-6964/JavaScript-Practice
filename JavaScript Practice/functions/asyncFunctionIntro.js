async function addNumbers(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

console.log(addNumbers(1, 5)); // 6 after 1 second

async function callAddNumbers() {
  const result = await addNumbers(5, 7);
  console.log(result); // 12
}

callAddNumbers();
