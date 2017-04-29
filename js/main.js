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
    title: "SHAKESPEARE SONNET 18",
    getOutput: function(){
        return "testMeDaddy";
  }  
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
function outputLib(lib){
    madLibOutput.innerHTML = lib.getOutput();
}
function onButtonClick(lib) {
    outputLib(lib);
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
var outputLibFromTextFile = readStringFromFileAtPath ( "/libs/shakespeareSonnet.txt" );