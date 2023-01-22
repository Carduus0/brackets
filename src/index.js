module.exports = function check(str, bracketsConfig) {
  let stack = []; 
  str = str.split('');
  for (let i in str) {
 for(let item in bracketsConfig){
    if (str[i] === bracketsConfig[item][0]){
      if (bracketsConfig[item][0]=== bracketsConfig[item][1]) {
        if (stack[stack.length -1] === str[i]) {
          stack.pop();
          continue
        }
      }
      stack.push(str[i]);
      continue
    }
    if(str[i] === bracketsConfig[item][1]) {
      let open = stack.pop();
      if (open !== bracketsConfig[item][0]) {
        return false
      }
    }
  }
}
  /* let stack = []; let open = []; let close = [];  let crutch = [];console.log(str);
  let bracketsConfig1 = bracketsConfig.flat(Infinity);
   open = bracketsConfig1.filter((item, index) => (index-1)%2 !==0);
   close =  bracketsConfig1.filter((item, index) => index%2);
   const same = open.filter((a) =>close.indexOf(a)!==-1);
  for(let i = 0; i < str.length; i++){
     if (open.includes(str[i])){
      stack.push(str[i]);
    }else{ 
      if(close.indexOf(str[i]) === open.indexOf(stack[stack.length-1])){
        stack.pop();
      }else{
      return false
    }
  }
  }
   */

  return (stack.length===0 )
}
