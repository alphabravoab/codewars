// Write a class function named repeat() that takes two arguments (a string and a long integer), and returns a new string where the input string is repeated that many times. For example:

// Repeater.repeat("a", 5)
// should return

// "aaaaa"

function repeater(string, n){
    return string.repeat(n)
  }


//   function repeater(string, n){
//     let x = string
//     for (c=1; c<n; c++){
//       x=x.concat(string)
//     }
//     return x
//   }