arr = [23, 9, 1, 12, 21, 17, 28, 29, 10, 27, 4, 20, 7, 0, 6, 8, 16, 26, 2, 11, 18, 24, 22, 15, 13, 25, 5, 3, 19, 14]

function sort(arr) {
    for (var i=0; i< arr.length; i++){
        for (var j=0; j< arr.length; j++){
            if (arr[j] < arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
sort(arr)
console.log(arr)

