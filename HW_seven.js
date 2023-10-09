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

    // 2 + 3
function click() {
    let p = document.createElement('p');
    p.className = "selector";
    document.body.appendChild(p);
    p.innerHTML = input.value;
    let pList = document.querySelectorAll("p.selector");
    console.log(pList.length);
    if(pList.length > 5) {
    pList[0].remove();
    }
}
button.onclick = click;