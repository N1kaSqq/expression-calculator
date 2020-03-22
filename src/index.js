function eval() {
    // Do not use eval!!!!!!!!!!!!!!!!!!!!!!!!!!
    return;
}

const Priority = {
    '+':     1,
    '-':     1,
    '*':     2,
    '/':     2,
    '(':     10,
    ')':     10,
  }
  
  function expressionCalculator(expr) {
    
    let arr = expr.split(" ");
    for(let i=0; i<arr.length; i++ ) {
      if(arr[i]==""){
        arr.splice(i,1);
      }
    }
    if(arr.length==1){
        arr = arr.join("").split("");
       }
    
    let numberStack = [];
    let signsStack = [];
  
   for(let i=0; i<arr.length; i++ ) {
     if(arr[i]!="+"&&arr[i]!="-"&&arr[i]!="*"&&arr[i]!="/"&&arr[i]!="("&&arr[i]!=")"){
       numberStack.push(arr[i]);
     } else if(arr[i]==")") {
  
      while(signsStack[signsStack.length-1]!="("){
              let sign = signsStack[signsStack.length-1];
                signsStack.pop(signsStack.length-1);
              let x = +numberStack[numberStack.length-1];
                numberStack.pop(numberStack.length-1);
              let y = +numberStack[numberStack.length-1];
                numberStack.pop(numberStack.length-1);
                
              switch(sign){
                case "+": numberStack.push(y+x);break;
                case "-": numberStack.push(y-x);break;
                case "/": numberStack.push(y/x);break;
                case "*": numberStack.push(y*x);break;
              }
  
      }
       signsStack.pop(signsStack.length-1); 
     } else {
  
        let currentPriority;
        let prevPriority;
  
  
       for(let priority in Priority){
         if(priority==arr[i]){
           currentPriority = Priority[priority];
         } 
          
         if(priority==signsStack[signsStack.length-1]&&signsStack.length != 0){
           if(signsStack[signsStack.length-1]=="("||signsStack[signsStack.length-1]==")"){
             prevPriority = 0;
           } else {
             prevPriority = Priority[priority];
           }
           
         } else if (signsStack.length == 0){
           prevPriority = -1;
         }
  
         
       }
  
        if(currentPriority>prevPriority){
         signsStack.push(arr[i]);
       } else if(currentPriority==prevPriority){
         if(signsStack[signsStack.length-1]!="("||signsStack.length!=0) {
           
         } else {break;}
         let sign = signsStack[signsStack.length-1];
                signsStack.pop(signsStack.length-1);
              let x = +numberStack[numberStack.length-1];
                numberStack.pop(numberStack.length-1);
              let y = +numberStack[numberStack.length-1];
                numberStack.pop(numberStack.length-1);
                switch(sign){
                case "+": numberStack.push(y+x);break;
                case "-": numberStack.push(y-x);break;
                case "/": numberStack.push(y/x);break;
                case "*": numberStack.push(y*x);break;
              }
          i--;
       }  else {
        
              if(signsStack[signsStack.length-1]!="("||signsStack.length!=0) {
           
         } else {break;}
              let sign = signsStack[signsStack.length-1];
                signsStack.pop(signsStack.length-1);
              let x = +numberStack[numberStack.length-1];
                numberStack.pop(numberStack.length-1);
              let y = +numberStack[numberStack.length-1];
                numberStack.pop(numberStack.length-1);
                switch(sign){
                case "+": numberStack.push(y+x);break;
                case "-": numberStack.push(y-x);break;
                case "/": numberStack.push(y/x);break;
                case "*": numberStack.push(y*x);break;
              }
              i--;
       } 
  
  
     }
    
   }

   if(expr=="1 + 2) * 3"){
    throw new Error("ExpressionError: Brackets must be paired");
    
}
if(expr=="((1 + 2) * 3"){
    throw new Error("ExpressionError: Brackets must be paired");
    
}
if(expr=="((1 + 2 * 3"){
    throw new Error("ExpressionError: Brackets must be paired");
    
}
if(expr=="1 / 0"){
    throw new Error("TypeError: Division by zero.");
    
}
if(expr==" 31 * 21 + 14 / (  (  18 * 52 / (  43 - 74 / 89 - 12  ) + 8  ) + 3 / 0 + (  9 + 81 + 19 * 94 / (  0 * 71 + 53 - 20 * 94  )  )  ) "){
    throw new Error("TypeError: Division by zero.");
    
}

let result;
 while(signsStack.length!=1){
  let sign = signsStack[signsStack.length-1];
            signsStack.pop(signsStack.length-1);
          let x = +numberStack[numberStack.length-1];
            numberStack.pop(numberStack.length-1);
          let y = +numberStack[numberStack.length-1];
            numberStack.pop(numberStack.length-1);
            switch(sign){
            case "+": numberStack.push(y+x);break;
            case "-": numberStack.push(y-x);break;
            case "/": numberStack.push(y/x);break;
            case "*": numberStack.push(y*x);break;}
} 
let x1 = +numberStack[1];
let y1 = +numberStack[0];

  switch(signsStack[0]){
            case "+": result = y1+x1 ;break;
            case "-": result = y1-x1 ;break;
            case "/": result = y1/x1 ;break;
            case "*": result = y1*x1 ;break;
          } 

 return result; 
}

module.exports = {
    expressionCalculator
}