const summinzor = (n1, n2)=>{
    const lowest = Math.min(n1, n2)
    const highest = Math.max(n1, n2)
    let numberx = 0
    for ( x = lowest; x<=highest; x++){
      numberx += x
    }
    return numberx
  }
  
  summinzor(5,10)
  
  
  const palindrom =(str)=>{
    const word= str.replace(/\W/g, "" ).toLowerCase()
    return word===word.split("").reverse().join("")
  }
  
  
  console.log("tes[]T2d0--", palindrom("tes[]T2d0--"))
  console.log("rar", palindrom("Rar"))
  console.log("racecar", palindrom("race-car"))