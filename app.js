var max = 0
var min=100000000
var arr = []
var num,n;
num= +prompt("How many numbers you want to enter: ")
for(j=0;j<num;j++){
    n = +prompt("Enter the number: ")
    arr.push(n)
}

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
    if (arr[i]<min){
        min=arr[i]
    }
}
console.log(arr)
console.log("The Largest number is: ", max)
console.log("The smallest number is: ", min)