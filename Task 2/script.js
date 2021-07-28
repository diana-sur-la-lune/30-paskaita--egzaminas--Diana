
function incrementButton() {
    let element = document.getElementById('btn__state');
    let value = element.innerHTML;

    ++value;

    document.getElementById('btn__state').innerHTML = value;
}