/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

let content = document.getElementById("output");
let button = document.getElementById('btn');
let message = document.getElementById('message');

button.addEventListener('click', () => {
        content.style.display = 'block';
        message.style.display = 'none';
    } 

);

const ENDPOINT = 'https://api.github.com/users';

async function getResponse() {
let response = await fetch('https://api.github.com/users')
let content = await response.json()
content = content.splice(0,6)

let list = document.querySelector('.users')

let key;

for (key in content) {

list.innerHTML += `
<li class="user">
<h4>${content[key].login}</h4>
<img src="${content[key].avatar_url}" width="200">
</li>
`
    content[key]
}
}

getResponse()