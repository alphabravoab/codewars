const fizzbuzz = (count, fizz, buzz) => {
    const array = []
    for (i = 0; i<= count; i++)
    {
      let returnnumberorword = null
      if(i%fizz == 0 && i != 1 && i != 0 )
      {
        returnnumberorword = 'fizz'
      }
      if(i%buzz == 0 && i != 1 && i != 0 )
      {
        returnnumberorword =  returnnumberorword +'buzz'
      } 
      if(!returnnumberorword)
      {
        returnnumberorword = i
      }
      array.push(returnnumberorword)
    }
    return array
  }
  
  console.log(fizzbuzz(100, 3, 15))