var madLibOutput = document.getElementById("madLibOutput");
var inputOptions = document.getElementById("inputOptions");
var currentLib;
// '<input type="text" class="form-control" placeholder="Verb">'
var shakespeareSonnet = {
    //6 adj, 7 noun, 3 body parts, 2 locations, 4 verbs, 1 celebrity, 2 living things
    verbs: 4,
    nouns: 7,
    adjectives: 6,
    bodyParts: 3,
    locations: 3,
    celebrities: 1,
    livingThings: 2,
    colors: 1,
    filePath: "bigbadloser.github.io/madLibs/libs/shakespeareSonnet.txt", //VERY IMPORTANT, CHANGE THIS BEFORE COMMITING TO GITHUB!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    title: "SHAKESPEARE SONNET 18",
};
function createInputArray(lib){
    var inputOptionsA = [];
    for (var i = 0; i < lib.verbs; i++){
        var iPlus = i + 1;
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Verb' + ' ' + iPlus + '"' + 'id="verb' + i + '">');
    }
    for (var i = 0; i < lib.nouns; i++){
        var iPlus = i + 1;
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Noun' + ' ' + iPlus + '"' + 'id="noun' + i + '">');
    }
    for (var i = 0; i < lib.adjectives; i++){
        var iPlus = i + 1;
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Adjective' + ' ' + iPlus + '"' + 'id="adjective' + i + '">');
    }
    for (var i = 0; i < lib.bodyParts; i++){
        var iPlus = i + 1;
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Body Part' + ' ' + iPlus + '"' + 'id="bodyPart' + i + '">');
    }
    for (var i = 0; i < lib.locations; i++){
        var iPlus = i + 1;
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Location' + ' ' + iPlus + '"' + 'id="location' + i + '">');
    }
    for (var i = 0; i < lib.celebrities; i++){
        var iPlus = i + 1;
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Celebrity' + ' ' + iPlus + '"' + 'id="celebrities' + i + '">');
    }
    for (var i = 0; i < lib.livingThings; i++){
        var iPlus = i + 1;
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Living Thing' + ' ' + iPlus + '"' + 'id="livingThing' + i + '">');
    }
    for (var i = 0; i < lib.livingThings; i++){
        var iPlus = i + 1;
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Color' + ' ' + iPlus + '"' + 'id="color' + i + '">');
    }
    return inputOptionsA;
}

function setInput(lib){
    inputOptions.innerHTML = createInputArray(lib).join("");
}
function outputLib(){
    var output = getOutput(currentLib);
    madLibOutput.innerHTML = output;
    
}
function onButtonClick(lib) {
    currentLib = lib;
    setInput(lib);
}

//document.getElementById("searchTxt").value;
function readStringFromFileAtPath(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;
        return returnValue;
    }
    
function getOutput(lib){
    var txt = readStringFromFileAtPath (lib.filePath);
    for(var i = 1; i < lib.nouns; i++){
        txt = txt.replace("$noun" + i, document.getElementById("noun" + i).value);
    }
    for(var i = 1; i < lib.adjectives; i++){
        txt = txt.replace("$adj" + i, document.getElementById("adjective" + i).value);
    }
    for(var i = 1; i < lib.verbs; i++){
        txt = txt.replace("$verb" + i, document.getElementById("verb" + i).value);
    }
    for(var i = 1; i < lib.colors; i++){
        txt = txt.replace("$color" + i, document.getElementById("color" + i).value);
    }
    for(var i = 1; i < lib.bodyParts; i++){
        txt = txt.replace("$bodyPart" + i, document.getElementById("bodyPart" + i).value);
    }
    for(var i = 1; i < lib.celebrities; i++){
        txt = txt.replace("$celebrity" + i, document.getElementById("celebrity" + i).value);
    }
    for(var i = 1; i < lib.livingThings; i++){
        txt = txt.replace("$livingThing" + i, document.getElementById("livingThing" + i).value);
    }
    for(var i = 1; i < lib.locations; i++){
        txt = txt.replace("$location" + i, document.getElementById("location" + i).value);
    }
    return txt;
}    


