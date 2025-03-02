function addingEventListener() {

const input = document.getElementById('button');

function clickAlert() {
    alert('Sent!');
}
input.addEventListener('click', clickAlert);
}