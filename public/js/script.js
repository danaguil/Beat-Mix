// Drum Array
let kicks = []
let snares = []
let hiHats = []
let rideCymbals = []
// need to initialize the arrays before adding anything

// loop to set all variables with 16 slots to false, using an insert function
function insertFalse(array) {
    for(let i = 0; i < 16; i++){
        array[i] = false;
    }
}
// using function to insert false
insertFalse(kicks);
insertFalse(snares);
insertFalse(hiHats);
insertFalse(rideCymbals);

// toggle Drum function, function will flip the boolean value in the correct
// array at specified index
function toggleDrum(array,indexNum) {
    if(!    array) return null;

    if(array === kicks || array === snares || array === hiHats || array === rideCymbals){
        if (0 <= indexNum && indexNum < 16) {
            array[indexNum] = !array[indexNum];
        }
    }
    
}