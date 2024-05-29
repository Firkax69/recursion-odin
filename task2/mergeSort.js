function mergeSort(array) {
    // if the array has 1 or fewer elements, it's already sorted
    if (array.length <= 1) {
        return array;
    }

    // Split the array into two halves
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Recursively sort each half
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

// THIS NEEDS LEARNING

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex])
            rightIndex++;
            
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}