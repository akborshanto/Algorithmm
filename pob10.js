let temp=[-2,-3,45,65,45,,-4,-5,"error",-5,4,67,3];
function getHigherAndLower(arr){
//create a higervar
//create a lower var
//iterate whole  arr
//let's check is there any error
//if  higher var has smaller number than our current nuber than value will be our.

//if  lower var has bigger number than our current nuber than value will be our.
// return higher var to lower var

let higher=arr[0]
let lower=arr[0]

for(let i=0; i<arr.length;i++){
if ( typeof arr[i] !== "number")continue
//console.log(typeof arr[i])
if(higher <arr[i]){

    higher = arr[i]
}

if(lower>arr[i]){
    lower =arr[i]
}



}



console.log(lower,higher)

return higher - lower

}

getHigherAndLower(temp)