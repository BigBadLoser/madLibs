var madLibOutput = document.getElementById("madLibOutput");
var inputOptions = document.getElementById("inputOptions");
var ou = document.querySelector("#madLibOutput");
var currentLib;
var verbs = ["run", "walk", "kill", "throw", "eat", "ski", "fall"];
var nouns = ["cat", "dog", "horse", "chicken", "potato", "lead-based paint"];
var adjectives = ["juicy", "watery"];
var bodyParts = ["arm", "leg", "hand", "foot", "abdomen"];
var locations = ["Paris", "Georgia"]; // all 50 states
var celebrities = ["Tom Cruise", "Matt Damon", "Leonardo DiCaprio"];
var livingThings = ["Dog", "Tree", "Cucumber"];
var colors = ["blue", "red", "white"];
var householdItems = ["lamp", "television"];
var exclamations = ["Eureka!", "Daddy!", "Wow!"];
var monsters = ["werewolf", "vampire"];
var clothing = ["shirt", "pants", "shoes"];
var companies = ["Taco Bell", "Walmart", "Chick-fil-a"];
var names = ["Todd", "Jimmy", "Johnny"];

var shakespeareSonnet = {
    verbs: 5,
    nouns: 10,
    adjectives: 6,
    bodyParts: 3,
    locations: 3,
    celebrities: 1,
    livingThings: 2,
    colors: 1,
    filePath: "libs/shakespeareSonnet.txt",
    title: "SHAKESPEARE SONNET 18",
};
var coolestGirl = {
    verbs: 4,
    nouns: 2,
    adjectives: 1,
    bodyParts: 3,
    locations: 0,
    householdItems: 1,
    exclamations: 1,
    clothing: 1,
    filePath: "libs/coolestGirl.txt",
    title: "How To Date the Coolest Girl in School",
};
var afraid = {
    verbs: 5,
    nouns: 6,
    bodyParts: 4,
    exclamations: 1,
    monsters: 1,
    filePath: "libs/afraid.txt",
    title: "Afraid of the Dark",
};

var vegan = {
    nouns: 4,
    adjectives: 4,
    bodyParts: 1,
    celebrities: 0,
    livingThings: 3,
    monsters: 1,
    names: 1,
    filePath: "libs/vegan.txt",
    title: "Vegan Stories",
};


var starWars = {
    verbs: 1,
    nouns: 7,
    adjectives: 2,
    locations: 2,
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
function generateRandom() {
    var lib = currentLib;
    var txt = readStringFromFileAtPath (lib.filePath);
    for(var i = 1; i <= lib.nouns; i++){
        txt = txt.replace("$noun" + i, nouns[Math.floor(Math.random() * nouns.length)]);
    }
    for(var i = 1; i <= lib.adjectives; i++){
        txt = txt.replace("$adj" + i, adjectives[Math.floor(Math.random() * adjectives.length)]);
    }
    for(var i = 1; i <= lib.verbs; i++){
        txt = txt.replace("$verb" + i, verbs[Math.floor(Math.random() * verbs.length)]);
    }
    for(var i = 1; i <= lib.colors ; i++){
        txt = txt.replace("$color" + i, colors[Math.floor(Math.random() * colors.length)]);
    }
    for(var i = 1; i <= lib.bodyParts; i++){
        txt = txt.replace("$bodyPart" + i, bodyParts[Math.floor(Math.random() * bodyParts.length)]);
    }
    for(var i = 1; i <= lib.celebrities; i++){
        txt = txt.replace("$celebrity" + i, celebrities[Math.floor(Math.random() * celebrities.length)]);
    }
    for(var i = 1; i <= lib.livingThings ; i++){
        txt = txt.replace("$livingThing" + i, livingThings[Math.floor(Math.random() * livingThings.length)]);
    }
    for(var i = 1; i <= lib.locations ; i++){
        txt = txt.replace("$location" + i, locations[Math.floor(Math.random() * locations.length)]);
    }
    for(var i = 1; i <= lib.householdItems ; i++){
        txt = txt.replace("$householdItem" + i, householdItems[Math.floor(Math.random() * householdItems.length)]);
    }
    for(var i = 1; i <= lib.exclamations ; i++){
        txt = txt.replace("$exclamation" + i, exclamations[Math.floor(Math.random() * exclamations.length)]);
    }
    for(var i = 1; i <= lib.monsters ; i++){
        txt = txt.replace("$monster" + i, monsters[Math.floor(Math.random() * monsters.length)]);
    }
    for(var i = 1; i <= lib.clothing ; i++){
        txt = txt.replace("$clothing" + i, clothing[Math.floor(Math.random() * clothing.length)]);
    }
    for(var i = 1; i <= lib.names ; i++){
        txt = txt.replace("$name" + i, names[Math.floor(Math.random() * names.length)]);
    }
    for(var i = 1; i <= lib.companies; i++){
        txt = txt.replace("$company" + i, companies[Math.floor(Math.random() * companies.length)]);
    }    
    madLibOutput.innerHTML = txt;
    ou.style.textAlign = "left";
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