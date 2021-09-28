const races = ["Dwarf"];
/*const races = ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"];*/
const genders = ["Male", "Female"];
const occupations = ["Tanner", "Blacksmith", "Peddler", "Labourer", "Dockhand"]
const demeanours = ["Friendly", "Unfriendly", "Indifferent"];

const generateRace = function() {
  const randomRace = races[Math.floor(Math.random() * races.length)];
  return console.log(randomRace);
}

const generateGender = function() {
  const randomGender = genders[Math.floor(Math.random() * genders.length)];
  return console.log(randomGender);
}

const generateOccupation = function() {
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  return console.log(randomOccupation);
}

const generateDemeanour = function() {
  const randomDemeanour = demeanours[Math.floor(Math.random() * demeanours.length)];
  return console.log(randomDemeanour);
}

const generateName = function(randomGender) { /* ERROR! - Always prints "Bob" */
  
  //Generate race and gender here to generate the name and then return all three values.
   
  // Replace with swucth statment for gender identity?
  if (randomGender = "Male") {
    //switch statement for races to select male name
    console.log("Bob");
  } else {
    //switch statement for races to select female name
    console.log("Sue");
  }
}

const generateNPC = function() {
  generateRace();
  generateGender();
  generateOccupation();
  generateDemeanour();
  generateName();
}

generateNPC();