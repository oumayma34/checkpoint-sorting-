function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            j--;
        }
        
        arr.splice(j + 1, 0, key);
        arr.splice(i + 1, 1);
    }
    return arr;
       
}

let array = [7, 2, 8, 1, 4, 6];
console.log("Sorted array:", insertionSort(array));
