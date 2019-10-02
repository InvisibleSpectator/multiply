module.exports = function multiply(first, second) {
  let arr = [];
  let carry = 0;
  let result = "";
  for (let i = 0; i < second.length; i++) {
    let string = "";
    carry = Math.floor(carry / 10);
    for (let j = 0; j < first.length; j++) {
      let mul = first[first.length - j - 1] * second[second.length - i - 1] + carry;
      string = mul % 10 + string;
      carry = Math.floor(mul / 10);
    }
    if (carry > 0)
      string = carry % 10 + string;
    string = string.padEnd(string.length + i, "0");
    string = string.padStart(second.length + first.length, "0")
    arr.push(string);
  }
  carry = 0;
  for (let i = 0; i < arr[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += Number(arr[j][arr[0].length - i - 1]);
    } 
    sum += carry;
    result = sum % 10 + result;
    carry = Math.floor(sum / 10);
  }
  result = carry + result;
  return result.replace(/^0+/, "");
}
