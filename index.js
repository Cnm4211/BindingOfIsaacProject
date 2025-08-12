
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
    'Star',
    'Hush',
    'Cent',
    'Void',
    'Knife',
    'Dads Note',
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
    const randomGoalNumber = Math.floor(Math.random() * goals.length);
    const randomGoal = goals[randomGoalNumber];
    imgGoalSolo.src = `images/Completion_${randomGoal.toLowerCase().split(" ").join("_")}_Hard.png`;
    selectedGoal = randomGoal;

    //Random Character
    const keys = Object.keys(characters);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    selectedCharacter = randomKey;

    //Character Image and Label
    const imgSoloLabel = document.getElementById("img_charSoloLabel");
    imgNameSolo.src = `images/Character_${randomKey.toLowerCase().split(" ").join("_")}_appearance.png`;
    imgSoloLabel.textContent = randomKey;
});


document.getElementById("completionButton").addEventListener("click", () => {
    if (!selectedCharacter) {
        alert("Randomize First!");
        return;
    }
    console.log(selectedCharacter);
    console.log(selectedGoal);
    console.log(goals.indexOf(selectedGoal));

    const completionMarks = characters[selectedCharacter];
    completionMarks[goals.indexOf(selectedGoal)] = true;
    console.log(completionMarks);
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
    console.log("progress saved");
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
                console.log("Progress Loaded", mergedData);
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
    document.getElementById("goalBoxes").style.display = "none";
});

document.getElementById("closeButton").addEventListener("click", () => {
    document.getElementById('optionsMenu').classList.remove('show');
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
        console.log(`Selected Character: ${currentCharacter}`);
        console.log(`${event.target.id} checked: ${event.target.checked}`);
        let currentCharacterMarks = characters[currentCharacter];
        console.log(`index ${checkbox.dataset.index}`);

        if (checkbox.checked){
            currentCharacterMarks[checkbox.dataset.index] = true;
        }
        else if (checkbox.checked == false){
            currentCharacterMarks[checkbox.dataset.index] = false;
        }

        console.log(`Current Marks: ${currentCharacterMarks}`);

        
    });
});

function loadGoalBoxes() {
    console.log("load goal boxes check, ", currentCharacter);
}



/*
To Do Next:

Now that we have a selected character, we can update that characters marks when a checkbox is checked

Additionally we need to have it load any previously updated marks

*/