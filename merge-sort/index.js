const mergeSort = (array) => {
    if (array.length < 2) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    const sorted = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    const results = [...sorted, ...left, ...right];
    console.log(results);
    return results;
};

const numbers = [10, 5, 6, 3, 2, 8, 9, 7, 1];

mergeSort(numbers);