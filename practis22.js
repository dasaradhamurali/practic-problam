const school = {
  "engineering": {
    "students": 324,
    "dep_id": 3,
    "faculties": 4
  },
  "medical": {
    "students": 499,
    "dep_id": 2,
    "faculties": 6
  },
  "pure-science": {
    "students": 133,
    "dep_id": 1,
    "faculties": 2
  },
  "linguistics": {
    "students": 183,
    "dep_id": 4,
    "faculties": 3
  },
  "philosophy": {
    "students": 73,
    "dep_id": 5,
    "faculties": 2
  }
}



let newData = Object.keys(school).map(obj => ({ deparment_id: obj, data: school[obj] }));

console.log(newData);







/*
 
    1. Group the data in terms of deparment id.
    2. Filter dat;a with students greater than 200.
    3. Add a new property (labs-required) to each object . Set value as true for engineering medical and purescience ..and false for lingustics and philosophy
 
*/




let output1 = Object.values(school).map((studentValue) => {
 
   

  if (studentValue.class = studentValue.students > 200) {
     let studentUpeer200 = []
    studentUpeer200.push(studentValue.class)
  } else {
   let studentlower200 = []
    studentlower200.push(studentValue.class)


  }

  return studentValue;
})
console.log(output1)



//Q3
const reasult = Object.entries(school).map((obj) => {({ ...obj, ['labs-required']: obj[0] })
      if (obj === obj.engineering && medical && pure-science) {
  return true
} else {
 
  return false
 }

})

 console.log(reasult)

