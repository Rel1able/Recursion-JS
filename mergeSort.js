function mergeSort(array) {
    if (array.length <= 1) return array;
    
    let mid = Math.floor((array.length / 2));

    let left = array.slice(0, mid);

    let right = array.slice(mid, array.length);
    
    return  merge(mergeSort(left),mergeSort(right));

}

function merge(leftArray, rightArray) {
    let mergedList = []
    let i = 0;
    let j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            mergedList.push(leftArray[i]);
            i++;
        } else {
            mergedList.push(rightArray[j]);
            j++;
        }
    }
    for (; i < leftArray.length; i++){
        mergedList.push(leftArray[i]);
    }
    for (; j < rightArray.length; j++){
        mergedList.push(rightArray[j]);
    }
    return mergedList;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); 

console.log(mergeSort([105, 79, 100, 110])); 