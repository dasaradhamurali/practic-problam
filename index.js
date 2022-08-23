/*
    Q1. Create a new file data.json
    { 
        "max": {
            colors: ['Orange', 'Red']
        }
    }


    Q2. Copy the contents of the data.json into a new folder output/data.json and delete the original file.
    Q3. Write a function that takes a person name and fav color as parameters and writes to data.json file
    (Do not replace the old content).
    Q4. Write a function that takes a person name and fav hobby as param and add that hobby as a separate key and write to data.json.
    (Do not replace the old content).
*/


let data = { 
    max: {
        colors: ["Orange", "Red"]
    }
}
//Q1
var fs = require('fs');


fs.writeFile('data.json', JSON.stringify(data), function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//Q2
fs.readFile('data.json',function (err,data) {
    if (err){
        console.log(err);
    }  else{
        fs.writeFile('output/data.json', data, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log('success');
            }
        });
    }  
})
//delete
fs.unlink('data.json', function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('success delete');
    }
})


//Q3
function addData(name, color){

const file = require('./output/data.json');
    
file[name] = color;
    
fs.writeFile('./output/data.json', JSON.stringify(file), function writeJSON(err) {
  if (err) return console.log(err);
  //console.log(JSON.stringify(file));
  console.log('writing to ');
});
}
addData('munna', 'red');


//Q4



function addData(name, color,hobby,sports){

    const file = require('./output/data.json');
     
   
    file[name] = color;
    file[hobby] = sports; 

    fs.writeFile('./output/data.json', JSON.stringify(file), function writeJSON(err) {
      if (err) return console.log(err);
      //console.log(JSON.stringify(file));
      console.log('writing to ');
    });
    }
    addData('munna', 'red', 'hobby','travaling');
    


