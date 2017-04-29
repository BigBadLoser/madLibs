var madLibOutput = document.getElementById("madLibOutput");
var inputOptions = document.getElementById("inputOptions");
var currentLib;
// '<input type="text" class="form-control" placeholder="Verb">'
var shakespeareSonnet = {
    verbs: 5,
    nouns: 10,
    adjectives: 6,
    bodyParts: 3,
    locations: 3,
    celebrities: 1,
    livingThings: 2,
    colors: 1,
    filePath: "bigbadloser.github.com/madLibs/libs/shakespeareSonnet.txt", //VERY IMPORTANT, CHANGE THIS BEFORE COMMITING TO GITHUB!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    title: "SHAKESPEARE SONNET 18",
};
function createInputArray(lib){
    var inputOptionsA = [];
    for (var i = 1; i <= lib.verbs; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Verb' + ' ' + i + '"' + 'id="verb' + i + '">');
    }
    for (var i = 1; i <= lib.nouns; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Noun' + ' ' + i + '"' + 'id="noun' + i + '">');
    }
    for (var i = 1; i <= lib.adjectives; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Adjective' + ' ' + i + '"' + 'id="adjective' + i + '">');
    }
    for (var i = 1; i <= lib.bodyParts; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Body Part' + ' ' + i + '"' + 'id="bodyPart' + i + '">');
    }
    for (var i = 1; i <= lib.locations; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Location' + ' ' + i + '"' + 'id="location' + i + '">');
    }
    for (var i = 1; i <= lib.celebrities; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Celebrity' + ' ' + i + '"' + 'id="celebrity' + i + '">');
    }
    for (var i = 1; i <= lib.livingThings; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Living Thing' + ' ' + i + '"' + 'id="livingThing' + i + '">');
    }
    for (var i = 1; i <= lib.livingThings; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Color' + ' ' + i + '"' + 'id="color' + i + '">');
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
    console.error(createInputArray(currentLib));
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
    for(var i = 1; i <= 10; i++){
        txt = txt.replace("$noun" + i, document.getElementById("noun" + i).value);
    }
    for(var i = 1; i <= lib.adjectives; i++){
        txt = txt.replace("$adj" + i, document.getElementById("adjective" + i).value);
    }
    for(var i = 1; i <= lib.verbs; i++){
        txt = txt.replace("$verb" + i, document.getElementById("verb" + i).value);
    }
    for(var i = 1; i <= lib.colors ; i++){
        txt = txt.replace("$color" + i, document.getElementById("color" + i).value);
    }
    for(var i = 1; i <= lib.bodyParts; i++){
        txt = txt.replace("$bodyPart" + i, document.getElementById("bodyPart" + i).value);
    }
    for(var i = 1; i <= lib.celebrities; i++){
        txt = txt.replace("$celebrity" + i, document.getElementById("celebrity" + i).value);
    }
    for(var i = 1; i <= lib.livingThings ; i++){
        txt = txt.replace("$livingThing" + i, document.getElementById("livingThing" + i).value);
    }
    for(var i = 1; i <= lib.locations ; i++){
        txt = txt.replace("$location" + i, document.getElementById("location" + i).value);
    }
    return txt;
}    
