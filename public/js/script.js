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

/*
    Function will return the correct array from the string input. Will
    be used with toggle drum function
*/
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
/*
    Function to toggle a drum at a specific index
    input won't be an array, will be as a string, so will 
    need to return an array
*/
function toggleDrum(array, indexNum) {
    // Check if the index is valid
    if (!Number.isInteger(indexNum) || indexNum < 0 || indexNum > 15) return null;
    
    // Checks if the input array name is valid, using a different function
    // returns if nothing is found
    const arrayName =  searchArray(array);
    // Toggle the boolean value at the specified index
    arrayName[indexNum] = !arrayName[indexNum];
}

/*
    Function is to set all 16 values of the correct array to false
    Conditions:
        if the correct array is given
*/
function clear(array){
    // Checks if the input array name is valid, using a different function
    // returns if nothing is found
    const arrayName =  searchArray(array);
    // Toggle the boolean value at the specified index
    
    // if given array exist then it will insert false throughout the array
    if(arrayName) insertFalse(arrayName);
}

/*
    Function will take an array name string and will flip the boolean value of ALL
        elements in the correct array
    Conditions:
        if the array exists
*/
function invert(array) {
    // Checks if the input array name is valid, using a different function
    // returns if nothing is found
    const arrayName =  searchArray(array);
    // Toggle the boolean value at the specified index
    
    if(arrayName){
        for (let i = 0; i < 16; i++) {
            arrayName[i] = !arrayName[i];
        }
    }     
}

/*
    Following functions are for the server-side, will handle saving and retreiving 
        drum machine from presetHandler.js
*/

/*
    Function will be called within server to get an existing preset or create/update a preset
    Parameters:
        - string representing request type : 'GET' or 'PUT'
        - array index of the presets array 
        - newPresetArray will be passed in ONLY for 'PUT' request 
    
*/
function presenthandler(method){
    if(method !== 'GET' || method !== 'PUT'){
        let notFoundArray = [400]
        return notFoundArray;
    } else if(method === 'GET') {
            
    } else if(method === 'PUT'){

    }

}

