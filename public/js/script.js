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

function searchArray(array) {
    switch (array) {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return;
    }
}

// Function to toggle a drum at a specific index
function toggleDrum(array, indexNum) {
    // Check if the index is valid
    if (!Number.isInteger(indexNum) || indexNum < 0 || indexNum > 15) return null;
    
    // Checks if the input array name is valid, using a different function
    // returns if nothing is found
    const arrayName =  searchArray(array);
    // Toggle the boolean value at the specified index
    arrayName[indexNum] = !arrayName[indexNum];

}
