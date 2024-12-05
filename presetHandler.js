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
    if(presets[index]){
        preset[404] 
    }
    if(method === 'GET'){
        tempArray[1] = newPresetArray[index]; 
        return tempArray;
    } else if(method === 'PUT') {
        tempArray[index] = newPresetArray
    } else {
        return [400];
    }

}
// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
