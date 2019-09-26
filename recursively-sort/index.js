const quickSort = (array) => {
    if (array.length < 2) {
        return array;
    }

    const pivotIndex = array.length - 1;
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < pivotIndex; i++) {
        const currentItem = array[i];
        currentItem < pivot ? left.push(currentItem) : right.push(currentItem);
    }
    const result = [...quickSort(left), pivot, ...quickSort(right)];
    console.log(JSON.stringify(result));

    return result;
}

const numbers = [10, 5, 6, 3, 2, 8, 9, 7, 1];

console.log(quickSort(numbers));
