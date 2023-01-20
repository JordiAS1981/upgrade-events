//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un Clickconsole log con la información del evento del click

let newElement= document.createElement('button');
newElement.id = 'btnToClick';
document.body.append(newElement);

const addEvent =  document.getElementById("btnToClick").addEventListener("click", clck);

function clck (event) {
    console.log(event);
    
   }

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

document.querySelector('.focus').addEventListener("focus", focusing);

function focusing (event) {
  let foc = event.target.value;
  console.log(foc);
} 

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

document.querySelector('.value').addEventListener("input", inputCall);
  
function inputCall (event) {
  let inp = event.target.value;
   console.log(inp);
}