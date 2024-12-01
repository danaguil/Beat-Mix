// Drum Arrays
let kicks = [];
let snares = [];
let hiHats = [];
let rideCymbals = [];

// Initialize the arrays with 16 slots set to false
function insertFalse(array) {
    for (let i = 0; i < 16; i++) {
        array[i] = false;
    }
}

// Insert false values into all drum arrays
insertFalse(kicks);
insertFalse(snares);
insertFalse(hiHats);
insertFalse(rideCymbals);

// Function to toggle a drum at a specific index
function toggleDrum(array, indexNum) {
    // Check if the array is valid (one of the drum arrays)
    if (![kicks, snares, hiHats, rideCymbals].includes(array)) return null;

    // Check if the index is valid
    if (!Number.isInteger(indexNum) || indexNum < 0 || indexNum > 15) return null;

    // Toggle the boolean value at the specified index
    array[indexNum] = !array[indexNum];
}
