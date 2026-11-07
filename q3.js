function countFrequency(str) {
    let frequency = {};

    for (let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase();

        if (frequency[ch]) {
            frequency[ch]++;
        }
        else {
            frequency[ch] = 1;
        }
    }

    return frequency;
}

console.log(countFrequency("Hello"));