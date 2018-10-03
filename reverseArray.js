// The Array's reverse() method has gone missing! Re-write it, quick-sharp!

// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.



Array.prototype.reverse = function(A) {
    let Arr=this.splice(0)
    for (let x = Arr.length-1; x>=0; x--) {
       this.push(Arr[x])
       }
  
    return this
    
  };