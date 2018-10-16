let input = "hello world!";
let result = '';

function balikString(str) {
   for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
   }
   return result;
}

console.log(balikString(input));``