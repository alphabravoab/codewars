function wordCheck(word){

    if(word === "!" || word === "?") {
      return word
    }
    const test = word.split("")
    test.push(test[0])
    test.shift(0)
    return test.join("")+"ay"
  }
  function pigIt(str){
    const sentice = str.split(" ").map(x => wordCheck(x))
    return sentice.join(" ")
  }