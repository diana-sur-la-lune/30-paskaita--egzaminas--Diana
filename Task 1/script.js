/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let button = document.getElementById('submit-btn');
let result = document.getElementById('result');

button.addEventListener('click', function(){
    let input = document.getElementById('search').value;
    let choice = document.getElementById('choice').value;

    if(choice == "lb"){
        result.innerHTML = Math.round(input*2.2046) + " lb"
    }
    else if (choice == "g"){
        result.innerHTML = Math.round(input/0.0010000) + " g"
    }
    else if (choice == "oz"){
        result.innerHTML = Math.round(input*35.2740) + " oz"
    }
})