var madLibOutput = document.getElementById("madLibOutput");
var inputOptions = document.getElementById("inputOptions");
var ou = document.querySelector("#madLibOutput");
var currentLib;
// '<input type="text" class="form-control" placeholder="Verb">'

//Instead of 0, I should really just check if they have a value at all during my loops, but oh well.
var shakespeareSonnet = {
    verbs: 5,
    nouns: 10,
    adjectives: 6,
    bodyParts: 3,
    locations: 3,
    celebrities: 1,
    livingThings: 2,
    colors: 1,
    householdItems: 0,
    exclamations: 0,
    monsters: 0,
    clothing: 0,
    filePath: "libs/shakespeareSonnet.txt",
    title: "SHAKESPEARE SONNET 18",
};
//1 household item, 4 verb, 1 adj., 2 noun, 1 article of clothing, 3 body part, 1 exclamation, 
var coolestGirl = {
    verbs: 4,
    nouns: 2,
    adjectives: 1,
    bodyParts: 3,
    locations: 0,
    celebrities: 0,
    livingThings: 0,
    colors: 0,
    householdItems: 1,
    exclamations: 1,
    monsters: 0,
    clothing: 1,
    names: 0,
    companies: 0,
    filePath: "libs/coolestGirl.txt",
    title: "How To Date the Coolest Girl in School",
};
var afraid = {
    verbs: 4,
    nouns: 6,
    adjectives: 0,
    bodyParts: 4,
    locations: 0,
    celebrities: 0,
    livingThings: 0,
    colors: 0,
    householdItems: 0,
    exclamations: 1,
    monsters: 1,
    clothing: 0,
    names: 0,
    companies: 0,
    filePath: "libs/afraid.txt",
    title: "Afraid of the Dark",
};

//1 body part, 4 noun, 2 animal, 4 adj., 1 vegetable, 1 name
var vegan = {
    verbs: 0,
    nouns: 4,
    adjectives: 4,
    bodyParts: 1,
    locations: 0,
    celebrities: 0,
    livingThings: 3,
    colors: 0,
    householdItems: 0,
    exclamations: 0,
    monsters: 1,
    clothing: 0,
    names: 1,
    companies: 0,
    filePath: "libs/vegan.txt",
    title: "Vegan Stories",
};

//7 nouns, 2 locations, 2 adj., 1 form of transportation, 2 company, 1 name, 1 job title, 1 verb-ed

var starWars = {
    verbs: 1,
    nouns: 7,
    adjectives: 2,
    bodyParts: 0,
    locations: 2,
    celebrities: 0,
    livingThings: 0,
    colors: 0,
    householdItems: 0,
    exclamations: 0,
    monsters: 0,
    clothing: 0,
    names: 1,
    companies: 2,
    filePath: "libs/starWars.txt", 
    title: "Star Wars",
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
    for (var i = 1; i <= lib.colors; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Color' + ' ' + i + '"' + 'id="color' + i + '">');
    }
    for (var i = 1; i <= lib.householdItems; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Household item' + ' ' + i + '"' + 'id="householdItem' + i + '">');
    }
    for (var i = 1; i <= lib.exclamations; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Exclamation' + ' ' + i + '"' + 'id="exclamation' + i + '">');
    }
    for (var i = 1; i <= lib.monsters; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Monster ' + ' ' + i + '"' + 'id="monster' + i + '">');
    }
    for (var i = 1; i <= lib.clothing; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Clothing Item ' + ' ' + i + '"' + 'id="clothing' + i + '">');
    }
    for (var i = 1; i <= lib.names; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Name ' + ' ' + i + '"' + 'id="name' + i + '">');
    }
    for (var i = 1; i <= lib.companies; i++){
        inputOptionsA.push('<input type="text" class="form-control" placeholder="Company ' + ' ' + i + '"' + 'id="company' + i + '">');
    }
    
    madLibOutput.innerHTML = '<button type="button" class="btn btn-default" onclick="outputLib()" id="outputButton">Output Lib</button>';
    ou.style.textAlign = "center";
    return inputOptionsA;
}

function setInput(lib){
    inputOptions.innerHTML = createInputArray(lib).join("");
}
function outputLib(){
    var output = getOutput(currentLib);
    madLibOutput.innerHTML = output;
    ou.style.textAlign = "left";
    
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
    for(var i = 1; i <= lib.nouns; i++){
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
    for(var i = 1; i <= lib.householdItems ; i++){
        txt = txt.replace("$householdItem" + i, document.getElementById("householdItem" + i).value);
    }
    for(var i = 1; i <= lib.exclamations ; i++){
        txt = txt.replace("$exclamation" + i, document.getElementById("exclamation" + i).value);
    }
    for(var i = 1; i <= lib.monsters ; i++){
        txt = txt.replace("$monster" + i, document.getElementById("monster" + i).value);
    }
    for(var i = 1; i <= lib.clothing ; i++){
        txt = txt.replace("$clothing" + i, document.getElementById("clothing" + i).value);
    }
    for(var i = 1; i <= lib.names ; i++){
        txt = txt.replace("$name" + i, document.getElementById("name" + i).value);
    }
    for(var i = 1; i <= lib.companies; i++){
        txt = txt.replace("$company" + i, document.getElementById("company" + i).value);
    }
    return txt;
}    