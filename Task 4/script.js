/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

async function getResponse() {
let response = await fetch('cars.json')
let content = await response.json()

let list = document.querySelector('#output')

let key;

for (key in content) {

list.innerHTML +=
`
<div class="card">
<div class="info">
<h2>${content[key].brand}</h4>
<h4>${content[key].models}</h3>
</div>
</div>
` 
}
}

getResponse()