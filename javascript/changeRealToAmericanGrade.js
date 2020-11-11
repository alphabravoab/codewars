function changeGrade(grade) {
      switch(true){
    case (grade <= 10 && grade >= 9):
        return "A"
        break;
        case (grade <= 8.9 && grade >= 8):
        return "B"
        break;
        case (grade <= 7.9 && grade >= 7):
        return "C"
        break;
        case (grade <= 6.9 && grade >= 6):
        return "D"
        break;
        case (grade <= 5.9):
        return "F"
        break;
    }
}

function toAmericanGrades(grades) {
  console.log(grades)
  const americanGrades=grades.map( changeGrade )
  console.log(americanGrades)
  return  americanGrades
  
}

const grades1 = [9, 5.5, 6, 7.3]