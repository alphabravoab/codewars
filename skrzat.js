function skrzat(type, input){
    const number = type === "d"? DecimalToBinary(input) : BinaryToDecimal(input)
    const origin = type === "b"? "binary": "decimal"
    const endText = `From ${origin}: ${input} is ${number}`
    return endText
  }
  
  const DecimalToBinary = (number) =>{
    if(number === 0)
    {
      return 0
    }
    let weirdBin = []
    let rem = number
     while(rem !==0)
     {   
        const divide = Math.ceil(rem / (-2))
        const bit =  rem - divide*(-2)    
        weirdBin.unshift(bit)
        rem = divide
     }
    return weirdBin.join("")
  }
  
  const BinaryToDecimal = (number) =>{
    const reducer =  (acc,cv,i) => acc + (cv * (-2)**i)
    const dec = number.split('').reverse().reduce(reducer, 0)
    return dec
  }