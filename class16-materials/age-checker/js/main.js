//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

const conditional = (e) => {
  let age = document.querySelector("#danceDanceRevolution").value;
  if (e.key === "Enter") {
    if (age < 16) {
      return console.log(`You can't drive son!`);
    } else if (age < 18) {
      return console.log(
        `You can't hate from outside the club, because you can't even get in`,
      );
    } else if (age < 21) {
      return console.log(`You can't drink`);
    } else if (age < 25) {
      return console.log(`You can't not rent a car affordably`);
    } else if (age < 30) {
      return console.log(`You can't rent fancy cars`);
    } else {
      return console.log(`Life has just begun`);
    }
  }
};
const inputListener = document
  .querySelector("#danceDanceRevolution")
  .addEventListener("keypress", conditional);
//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document
  .querySelector("h1")
  .addEventListener(
    "click",
    () => (document.querySelector("p").innerText = inputListener),
  );
