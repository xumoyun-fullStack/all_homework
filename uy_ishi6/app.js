// 1-misol
function Divide( a, b){
    if(a > b){
        return a/b
    }else{
        return a*b
    }
}


// 3 - misol
function IsPalindrom(a){
    
    a = a.toString()
    let arr = a.split("")

    let sum = ""

    for(let i = arr.length - 1; i >=0; i--){
        sum += arr[i]
     
    }

    if(a == sum){
        console.log("bu son polindrom")
    }else{
        console.log("bu son polindrom emas!")
    }
}


// 4 - misol

let arr = []
function searchVal(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            arr[i] = "_"
        }
    }
    let newArr = []
     newArr = arr

     return newArr
}

console.log(searchVal([4, 5, 6, 7], 4))