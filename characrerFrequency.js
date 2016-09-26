function characterFrequency (string) {
  let result = [];
  let freq = {};
  let arr = string.split('').sort();
  for (let i=0; i<arr.length;i++) {
    let character = arr[i];
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }
  for (let k in freq){
    result.push([k, freq[k]]);
  }
  return result.sort(function(a, b){
    if(a[1] === b[1]){
      let x = a[0]; 
      let y = b[0];
      return x < y ? -1 : x > y ? 1 : 0;
    }
    return b[1] - a[1];
  });
}