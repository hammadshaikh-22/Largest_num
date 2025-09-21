var max = 0
var min=100000000
var arr = [34, 54, 4, 67, 34, 90, 33, 12, 5]
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
    if (arr[i]<min){
        min=arr[i]
    }
}
console.log("The Largest number is: ", max)
console.log("The smallest number is: ", min)