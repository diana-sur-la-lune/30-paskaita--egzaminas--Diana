/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
function showObjectKeys(object) {
  return Object.keys(object);
}

const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

console.log('Object keys:', showObjectKeys(audi));