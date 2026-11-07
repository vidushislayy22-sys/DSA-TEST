function secondHighest(arr) {
    let highest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > highest) {
            second = highest;
            highest = arr[i];
        }
        else if (arr[i] > second && arr[i] < highest) {
            second = arr[i];
        }
    }

    if (second === -Infinity) {
        return null;
    }

    return second;
}

console.log(secondHighest([45, 80, 90, 65, 90, 70]));