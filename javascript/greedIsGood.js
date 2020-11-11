function score( dice ) {
    let three1, three6, three5, three4, three3, three2, one, five, score;
    three1 = dice.filter(x=> x === 1).length >= 3? score = 1000: 0 
    three6 = dice.filter(x=> x === 6).length >= 3? score = 600 : 0 
    three5 = dice.filter(x=> x === 5).length >= 3? score = 500 : 0 
    three4 = dice.filter(x=> x === 4).length >= 3? score = 400 : 0 
    three3 = dice.filter(x=> x === 3).length >= 3? score = 300 : 0 
    three2 = dice.filter(x=> x === 2).length >= 3? score = 200 : 0 
    one = dice.filter(x=> x === 1).length 
    five = dice.filter(x=> x === 5).length 
  
    one = one < 3? one * 100: Math.abs(one-3) * 100
    five = five <3 ? five * 50: Math.abs(five -3) *50
  
    score = 0 + three1 + three6 + three5 + three4 + three3 + three2 + one + five
  
    return score
  }