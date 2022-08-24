const items = {
    item_392019302: {
        name: "Washing Machine",
        stock: 3,
        
    },
    item_392019342: {
        name: "Light Bulb",
        stock: 3,
    },
    item_392019340: {
        name: "Streaming Device",
        stock: 2
    },
    item_392019389: {
        name: "Plug",
        stock: 1
    },
    item_392019311: {
        name: "Trace",
        stock: 1
    }
}


/*
Q1.Form the following solution

const result = {
    washing_machine: {
        item_id: 'item_392019302',
        stock: 3
    },
    light_bulb: {
        item_id: 'item_392019342',
        stock: 3
    },
    ...
}



Q.2 Write a function that takes items object,  propertyName and value as parameters .
The propertyName is added to each Object.
Try not to mutate the original object.

Q3. Clone items properly 
using object.assign
using spread operator.



*/


//Q1

let output1 =Object.keys(items).reduce((acc ,curr)=>{

    acc[items[curr].name]={item_id:curr,stock:items[curr].stock
      }
    return acc
    
},{})
console.log(output1);





//Q2


const addValue=Object.assign(items)

function  addNewvalue(propertyName,value){

    Object.keys(addValue).map((elements)=>{

        return addValue[elements].propertyName=value;
    })
}

addNewvalue('type','Electronics')

console.log(addValue);



//Q3
let result =Object.assign({},items)
console.log(result);


let output = {... items}
console.log(output);



let copyObj = JSON.parse(JSON.stringify(items))
console.log(copyObj);
