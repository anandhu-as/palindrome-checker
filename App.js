const inputField = document.getElementById("inputField");
const button = document.getElementById("button");
const result = document.getElementById("result");
const chekPalindrome = () => {
  const string = inputField.value;
  const newstring = string.split("").reverse().join("");
  string.toLowerCase() === newstring.toLowerCase()
    ? (result.innerHTML = `given string is palindrome`)
    : (result.innerHTML = "given string is not palindrome");
};
button.addEventListener("click", chekPalindrome);
