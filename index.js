
const characters = {
    "Isaac": [false, false, false, false, false, false, false, false, false],
    "Magdalene": [false, false, false, false, false, false, false, false, false],
    "Cain": [false, false, false, false, false, false, false, false, false],
    "Judas": [false, false, false, false, false, false, false, false, false],
    "Blue Baby": [false, false, false, false, false, false, false, false, false],
    "Eve": [false, false, false, false, false, false, false, false, false],
    "Samson": [false, false, false, false, false, false, false, false, false],
    "Azazel": [false, false, false, false, false, false, false, false, false],
    "Lazarus": [false, false, false, false, false, false, false, false, false],
    "Eden": [false, false, false, false, false, false, false, false, false],
    "The Lost": [false, false, false, false, false, false, false, false, false],
    "Lilith": [false, false, false, false, false, false, false, false, false],
    "Keeper": [false, false, false, false, false, false, false, false, false],
    "Apollyon": [false, false, false, false, false, false, false, false, false],
    "The Forgotten": [false, false, false, false, false, false, false, false, false],
    "Bethany": [false, false, false, false, false, false, false, false, false],
    "Jacob and Esau": [false, false, false, false, false, false, false, false, false],
    "Tainted Isaac": [false, false, false, false, false, false, false, false, false],
    "Tainted Magdalene": [false, false, false, false, false, false, false, false, false],
    "Tainted Cain": [false, false, false, false, false, false, false, false, false],
    "Tainted Judas": [false, false, false, false, false, false, false, false, false],
    "Tainted Blue Baby": [false, false, false, false, false, false, false, false, false],
    "Tainted Eve": [false, false, false, false, false, false, false, false, false],
    "Tainted Samson": [false, false, false, false, false, false, false, false, false],
    "Tainted Azazel": [false, false, false, false, false, false, false, false, false],
    "Tainted Lazarus": [false, false, false, false, false, false, false, false, false],
    "Tainted Eden": [false, false, false, false, false, false, false, false, false],
    "Tainted The Lost": [false, false, false, false, false, false, false, false, false],
    "Tainted Lilith": [false, false, false, false, false, false, false, false, false],
    "Tainted Keeper": [false, false, false, false, false, false, false, false, false],
    "Tainted Apollyon": [false, false, false, false, false, false, false, false, false],
    "Tainted The Forgotten": [false, false, false, false, false, false, false, false, false],
    "Tainted Bethany": [false, false, false, false, false, false, false, false, false],
    "Tainted Jacob": [false, false, false, false, false, false, false, false, false]
};

const challenges = [
    "Heart",
    'Cross',
    'Polariod',
    'Inverted Cross',
    'Negative',
    'Brimstone',
    'Star',
    'Hush',
    'Cent',
    'Wrinkled Paper',
    'Knife',
    'Dads Note',
];

const goals = [
    'Polariod',
    'Negative',
    'Brimstone',
    'Knife',
    'Dads Note',
    'Void',
    'Star',
    'Hush',
    'Cent',
];

const images = [
    'images/Character_Isaac_appearance.png',
    'images/Character_Magdalene_appearance.png',
    'images/Character_Cain_appearance.png',
    'images/Character_Judas_appearance.png',
    'images/Character_Blue_Baby_appearance.png',
    'images/Character_Eve_appearance.png',
    'images/Character_Samson_appearance.png',
    'images/Character_Azazel_appearance.png',
    'images/Character_Lazarus_appearance.png',
    'images/Character_Eden_appearance.png',
    'images/Character_The_Lost_appearance.png',
    'images/Character_Lilith_appearance.png',
    'images/Character_Keeper_appearance.png',
    'images/Character_Apollyon_appearance.png',
    'images/Character_The_Forgotten_appearance.png',
    'images/Character_Bethany_appearance.png',
    'images/Character_Jacob_And_Esau_appearance.png'
  ];

  const taintedImages = [
    'images/Character_Tainted_Isaac_appearance.png',
    'images/Character_Tainted_Magdalene_appearance.png',
    'images/Character_Tainted_Cain_appearance.png',
    'images/Character_Tainted_Judas_appearance.png',
    'images/Character_Tainted_Blue_Baby_appearance.png',
    'images/Character_Tainted_Eve_appearance.png',
    'images/Character_Tainted_Samson_appearance.png',
    'images/Character_Tainted_Azazel_appearance.png',
    'images/Character_Tainted_Lazarus_appearance.png',
    'images/Character_Tainted_Eden_appearance.png',
    'images/Character_Tainted_The_Lost_appearance.png',
    'images/Character_Tainted_Lilith_appearance.png',
    'images/Character_Tainted_Keeper_appearance.png',
    'images/Character_Tainted_Apollyon_appearance.png',
    'images/Character_Tainted_The_Forgotten_appearance.png',
    'images/Character_Tainted_Bethany_appearance.png',
    'images/Character_Tainted_Jacob_appearance.png'
  ];
  

const imgNameSolo = document.getElementById("img_charSolo")
const imgGoalSolo = document.getElementById("img_GoalSolo")
let selectedCharacter;
let selectedGoal;

document.getElementById("img_randomizeText").addEventListener("click", () => {
    //random Goal
    let randomGoalNumber = Math.floor(Math.random() * goals.length);
    selectedGoal = goals[randomGoalNumber];

    //Random Character
    let keys = Object.keys(characters);
    let randomIndex = Math.floor(Math.random() * keys.length);
    selectedCharacter = keys[randomIndex];

    //check if need to reroll
    while(characters[selectedCharacter][goals.indexOf(selectedGoal)]){
        //reroll character
        randomIndex = Math.floor(Math.random() * keys.length);
        selectedCharacter = keys[randomIndex];
        //reroll goal
        randomGoalNumber = Math.floor(Math.random() * goals.length);
        selectedGoal = goals[randomGoalNumber];
    }

    //Character Image and Label
    imgGoalSolo.src = `images/Completion_${selectedGoal.toLowerCase().split(" ").join("_")}_Hard.png`;
    const imgSoloLabel = document.getElementById("img_charSoloLabel");
    imgNameSolo.src = `images/Character_${selectedCharacter.toLowerCase().split(" ").join("_")}_appearance.png`;
    imgSoloLabel.textContent = selectedCharacter;
});


document.getElementById("completionButton").addEventListener("click", () => {
    if (!selectedCharacter) {
        alert("Randomize First!");
        return;
    }
    const completionMarks = characters[selectedCharacter];
    completionMarks[goals.indexOf(selectedGoal)] = true;
});


function saveToFile(data) {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url
    a.download = 'completionMarks.json';
    a.click();
    URL.revokeObjectURL(url);
}


function loadFromFile(callback) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = "application/json";
    input.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const jsonData = JSON.parse(event.target.result);
                const mergedData = { ...characters, ...jsonData };
                callback(mergedData);
            };
            reader.readAsText(file);
        }
    });
    input.click();
}

let gameData = { ...characters };
document.getElementById("saveButton").addEventListener("click", () => {
    //saving
    saveToFile(gameData);
});

document.getElementById("loadButton").addEventListener("click", () => {
    //loading
    loadFromFile((loadedData) => {
        gameData = loadedData;
        console.log("Loaded progress:", gameData);
    });
});

document.getElementById("optionButton").addEventListener("click", () => {
    document.getElementById('optionsMenu').classList.toggle('show');
    imgElement.src = './images/questionmark.png';
    document.getElementById("goalBoxes").style.display = "none";
});

document.getElementById("closeButton").addEventListener("click", () => {
    document.getElementById('optionsMenu').classList.remove('show');
    currentIndex = -1;
});

let currentIndex = -1;
let currentCharacter = "";
let splitCharacter= "";
const imgElement = document.getElementById("carouselImage");

document.getElementById("taintedCheckbox").addEventListener("click", (event) => {
    currentIndex = -1;
    showImage(currentIndex);
    document.getElementById("goalBoxes").style.display = "none";
});

function showImage(index){
    if (index === -1){
        imgElement.src = './images/questionmark.png';
    }
    else if (taintedCheckbox.checked == false){
    
        splitCharacter = images[index].split('_');
        currentCharacter = splitCharacter.slice(1, -1).join(' ');
        imgElement.src = images[index];
    }
    else if (taintedCheckbox.checked == true){
        splitCharacter = taintedImages[index].split('_'); 
        currentCharacter = splitCharacter.slice(1, -1).join(' ');
        imgElement.src = taintedImages[index];
    }
}
document.getElementById("leftButton").addEventListener("click", () => {
    
    if (currentIndex === -1) {
        currentIndex = images.length - 1;
        document.getElementById("goalBoxes").style.display = "none";
    } else {
        currentIndex--;
        if (currentIndex < -1) {
            currentIndex = -1;
        }
    }
    if (currentIndex == -1){
        document.getElementById("goalBoxes").style.display = "none";
    }
    else{
        document.getElementById("goalBoxes").style.display = "grid";
    }

    
    document.querySelectorAll("#goalBoxes input[type='checkbox']").forEach(cb => {
            cb.checked = false;
    });
    showImage(currentIndex);
    loadGoalBoxes();
});
document.getElementById("rightButton").addEventListener("click", () => {
    if (currentIndex < images.length-1){
        currentIndex++;
    }
    else{
        currentIndex = -1;
    }

    if (currentIndex == -1){
        document.getElementById("goalBoxes").style.display = "none";
    }
    else{
        document.getElementById("goalBoxes").style.display = "grid";
    }

    document.querySelectorAll("#goalBoxes input[type='checkbox']").forEach(cb => {
            cb.checked = false;
    });
    showImage(currentIndex);
    loadGoalBoxes();

});


const goalBoxes = document.querySelectorAll('#goalBoxes input[type="checkbox"]');
goalBoxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
        let currentCharacterMarks = characters[currentCharacter];

        if (checkbox.checked){
            currentCharacterMarks[checkbox.dataset.index] = true;
        }
        else if (checkbox.checked == false){
            currentCharacterMarks[checkbox.dataset.index] = false;
        }        
    });
});

function loadGoalBoxes() {
    let currentCharacterMarks = characters[currentCharacter];
    goalBoxes.forEach( (checkbox, index) => {
        checkbox.checked = currentCharacterMarks[index];
    });
}



/*
Completed:
Load and Save
Randomizing character and goals
Complete button to update the goal completion
Options Menu Open and Close
Character Carousel with left and right buttons and Tainted Characters
9 Checkboxes for each goal and updated the goal when clicked, saves in session but does not in between sessions as the user would need to save the file
When a character or goal is selected but has already been completed, reroll both character and goal


To Do Next:
test random to see if it gets all characters
test reroll

*/