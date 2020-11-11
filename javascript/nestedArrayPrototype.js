Array.prototype.sameStructureAs = function (other) {
    // easiest test are they the same length
    if(this.length != other.length) return false
    
    for (let x = 0; x<=this.length - 1; x++)
    {
       //  if either is a number or a string then these are true and will break this loop
      const thisChar = typeof(this[x]) == "number" || typeof(this[x]) == "string"
      const otherChar = typeof(other[x]) == "number" || typeof(other[x]) == "string"
       if(thisChar && otherChar)
         {
           continue
         }
      // If both are arrays this will check the internal of the array
      if(Array.isArray(this[x]) && Array.isArray(other[x]))
        {
          if(!this[x].sameStructureAs(other[x])) return false
          continue
        }
  
      return false
    }
  
      return true
  };