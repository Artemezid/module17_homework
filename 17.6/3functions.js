export function reverseString(str) {
    let reversedStr = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
};

export function  match(str1, str2){
   
    if (str1.toUpperCase() === str2.toUpperCase()){
      return true;
    }else {
      return false;
    }
};
match('Hello', 'hELlo');

export function multiply(a, b) {
    return a * b;
};
  