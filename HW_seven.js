// HW 7
    // 1
let button = document.getElementById("button");

let input = document.getElementById("input");
input.oninput = change;

button.style.display = "none";

function change() {
    if(input.value.length == 0) {
        button.style.display = "none";
    } else {
        button.style.display = "";
    }
}

    // 2
function click() {
    let p = document.createElement('p');
    document.body.appendChild(p);
    p.innerHTML = input.value;
}
button.onclick = click;

    // 3
if(p > 5) {
    p[0].remove;
}