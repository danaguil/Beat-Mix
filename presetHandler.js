// Use this presets array inside your presetHandler
const presets = require('./presets');


/*
    Function will be called within server to get an existing preset or create/update a preset
    Parameters:
        - string representing request type : 'GET' or 'PUT'
        - array index of the presets array 
        - newPresetArray will be passed in ONLY for 'PUT' request 
    
*/
const presetHandler = (method,index,newPresetArray) => {
    // if method is 'GET
    if(method === 'GET'){
        // Checking if we have a valid index
        if(presets[index]){
            // if we do, then return [200] with elem from presets at index
            return [200,presets[index]]
        }
        return [404]; // if given invalid index we return [404], NOT FOUND
    } else if(method === 'PUT') { // if method is PUT
        // Checking if we have a valid index
        if(presets[index]){
            presets[index] = newPresetArray; // set prests at index to newPresetsArray
            return [200,presets[index]]; // then return
        }
        return [404]; // if given invalid index we return [404], NOT FOUND
    } else {
        return [400]; // if given invalid method, we return [400], BAD REQUEST
    }

}
// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
