const data = [
    { 
        place: "Melbourne", 
        country: "Australia", 
        location: {
            lat: '99',
            lng: '88'
        },
        temperature: '38 Degree Celsius'
    },{ 
        place: "New Delhi", 
        country: "India", 
        location: {
            lat: '84',
            lng: '44'
        },
        temperature: '42 Degree Celsius'
    },{ 
        place: "Pretoria", 
        country: "SouthAfrica", 
        location: {
            lat: '35',
            lng: '24'
        },
        temperature: '39 Degree Celsius'
    },{ 
        place: "Mexico City", 
        country: "Mexico", 
        location: {
            lat: '34',
            lng: '38'
        },
        temperature: '43 Degree Celsius'
    },
    { 
        place: "London", 
        country: "England", 
        location: {
            lat: '57',
            lng: '34'
        },
        temperature: '26 Degree Celsius'
    }
]

const fs = require('fs')

/*
Note: Make sure not to mutate the array in all of the following questions.


Q1. Get all latitude and longitude of all the places in the following manner.
[{place: (lat, long)}, ...]

Q2. Sort data based on temperature (Low temperature first).

Q3.Rearrange data in the following format
[{ country: { place: { location: {lat, lng }, temperature }}}, ...]

Q4. Change temperature of SouthAfrica "Pretoria" to "49 Degree Celsius".

Q5. Add a new Object in the fourth postiion.
{ 
        place: "Bangalore", 
        country: "India", 
        location: {
            lat: '84',
            lng: '47'
        },
        temperature: '29 Degree Celsius'
 }

 Q6. Delete the third element in the array .
 Q7. Swap elements at position 2 and second last.
*/

//Q1

        for (let i=0;i<data.length;i++){

           let obj={

            [data[i].place]:data[i].location
        }

        //console.log(obj)
        }

// //Q2

         let output=data.sort(function (a,b){

            if(a.temperature < b.temperature)

            return -1;

            if (a.temperature > b.temperature)

            return 1;

            return 0
        })
        //console.log(output)

        // a.temperature < b.temperature ? -1 : 1
// //Q3




 

function outside() {
    let obj = []
    
    for (let i = 0; i < data.length; i++) {
        let eachData={}
        let dataObj = {}
        let eachValue =data[i];
        let {country,...rest}=eachValue
        dataObj[eachValue.place] = eachValue.location
        dataObj.temperature = eachValue.temperature
        eachData[data[i].country]= dataObj
        obj.push(eachData)

    }
    console.log(obj)
    //fs.writeFileSync("./data.json",JSON.stringify(obj))
}
outside()




// //Q4
   let addTemperature =[]
 
   let addNewData = {...data}

    addNewData[2]['temperature'] ="49 Degree Celsius"

    addTemperature.push(addNewData)

    //console.log(addTemperature)

  


//     //Q5

 let array =[]
       let addNewObject={...data}
     Object.assign(addNewObject[3],{ 

        place: "Bangalore", 

        country: "India", 

        location: {

            lat: '84',

            lng: '47'

        },
        temperature: '29 Degree Celsius'
    })
    array.push(addNewObject)
    //console.log(array)



//  //Q6
    let a=[]
    let  newData={...data}

        delete newData[2];
        a.push(newData)

    //console.log(a)


// //Q7


    let  b=[]
  let swapData={...data}

        let temp = swapData[1];

        swapData[1] =swapData[3]

        swapData[3] =temp


    b.push(swapData)
    //console.log(b)
    


