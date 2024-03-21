//Dice Roller

function rolldice(){
  const diceno = document.getElementById("diceno");
const diceresult = document.getElementById("diceresult");
const diceimg = document.getElementById("diceimg");
const Values = [] ;
const Diceimg =[];

  for(let i = 0; i < diceno.value; ++i)
  {
    const value = Math.floor(Math.random() * 6 + 1);
    Values.push(value);
    Diceimg.push(`<img src="assets/${value}.png" alt="Dice${value}">`);
  }
diceresult.textContent =`Dice: ${Values.join(', ')}`;
diceimg.innerHTML=`${Diceimg.join('')}`;
}
