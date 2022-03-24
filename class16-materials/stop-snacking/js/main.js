//Create a function that grabs the number of snacks from the input and tells you to stop that many times

const snackAttack = () => {
  let snacks = document.querySelector("input").value;
  document.querySelector("#stops").innerText = "";
  const numberSnacks = Number(snacks);
  for (let i = 0; i <= snacks; i++) {
    document.querySelector(`#stops`).innerText += " STOP";
  }
};

document.querySelector("#help").addEventListener("click", snackAttack);
