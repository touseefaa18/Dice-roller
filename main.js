function diceRoller(){
const inp = document.getElementById("input-id").value;
const dnum = document.getElementById("dice-number");
const dpic = document.getElementById("dice-picture");

const values=[];
const images=[];
   

for(let i=0; i<inp; i++){
        const value= Math.floor(Math.random()*6) + 1;
        values.push(value);
       images.push(`<img src="dice/${value}.png" alt="Dice ${value}">`);
    }

    dnum.textContent = `Dice: ${values.join(', ')}`;
    dpic.innerHTML = images.join('');

}
let doneBtutton = document.getElementById("don-btn");
doneBtutton.onclick = function(event){
    event.preventDefault();
    diceRoller();
}
