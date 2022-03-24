//Create a function that has a loop that prints '21' 21 times to the console and then call that function
const twentyone = () => {
  for (let i = 0; i < 21; i++) {
    console.log(21);
    const savageSays = document.querySelector("#savageSays");
    savageSays.innerText += ` ${21}`;
  }
};
//Bonus can you make it print '21' 21 times to the dom?
twentyone();
