function willThereEverBeARainbow(string){
    let rainbow ="REDORANGEYELLOWGREENBLUEINDIGOVIOLET".split("")
  let inc = string.split("")
  if (inc.length<=35) return "Too short for a rainbow!"
  let test = rainbow.map((r1)=> inc.filter((r2)=>{if (r1===r2) return 1}) ).map((x)=> x.length).reduce((acc, val)=>{
  if (val<=acc) return acc =val
  return acc
  }) 
  if (test===0) return 'No rainbow to be found!'
  if (test===1) return 'Look! A rainbow!'
  if (test>=2) return 'Double rainbow all the way!' 
  
}
console.log("a",
willThereEverBeARainbow('REDORANGEYELLOWGREENBLUEINDIGOVIOLET'))
console.log("b",
willThereEverBeARainbow('EDORANGEYELLOWGREENBLUEINDIGOVIOLET'))
console.log("c",
willThereEverBeARainbow('EORECDIDSEPYKWNTQVAZIESJKEOOBCCQNHQEJOXJRGLULRPGEGSN'))
console.log("d",
willThereEverBeARainbow('REDORANGEYELLOWGREENBLUEINDIGOVIOLETREDORANGEYELLOWGREENBLUEINDIGOVIOLET'))
console.log("e",
willThereEverBeARainbow('JDOIDNRETNMLLEFLORAUOHIIVLTRZRAYBEENGESCGUDEPKOENGIVYWLGBQXOE'))
console.log("f",
willThereEverBeARainbow('LQUEXEEARELNEPOIEBWVTYNIVEGZOLELDOIEOEAADLDTGSDREOORYNGNRNEGRENELROLYNVUODBOKCWILEUFHIGIBIJGMGTLR'))