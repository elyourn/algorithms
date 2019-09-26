const insertSort = (array) => {
    let i;
    let j;

    for (i = 1;  i < array.length; i++) {
        for (j = 0; j < i; j++) {
            console.log(JSON.stringify(array))
            if (array[i] < array[j]) {
                const [item] = array.splice(i, 1);
                array.splice(j, 0, item)
            }
        }
    }
    console.log(JSON.stringify(array))
    return array;
};

const numbers = [10, 5, 6, 3, 2, 8, 9, 7, 1];

insertSort(numbers);