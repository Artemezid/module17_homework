export function  match(str1, str2){
   
    if (str1.toUpperCase() === str2.toUpperCase()){
      return true;
    }else {
      return false;
    }
  };
  match('Hello', 'hELlo');
  