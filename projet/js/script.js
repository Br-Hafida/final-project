function Add() {
    var tr = document.createElement("tr");
    var txt = document.getElementById("txt");
    
    
    tr.innerHTML = txt.value +'<a><tr><td><input type="button"  onclick="edit(this)" value="modifier"> </td><td><input type="button"  onclick="remove(this)" value="supprimer"></td></tr></a>';
    

    txt.value = document.getElementById("txt").innerHTML;
    // li.addEventListener("dblclick", (event) => {
    // event.target.parentNode.removeChild(event.target);
    // });
    // Ou encore
    tr.addEventListener("dblclick", (event) => {
        document.getElementById("table").removeChild(event.target)
    });
    var ulEle = document.getElementById("table");
    ulEle.appendChild(tr);
    
}
function edit(elem){
var tr = document.createElement("tr");
var txt = document.getElementById("txt");
var s = elem.parentNode.parentNode;

tr.innerHTML = txt.value +'<a><tr><td><input type="button"  onclick="edit(this)" value="modifier"> </td><td><input type="button"  onclick="remove(this)" value="supprimer"></td></tr></a>';


 document.getElementById("table").replaceChild(tr,s);
}

function remove (elem) {
    el = elem.parentNode.parentNode;
    el.parentNode.removeChild(el);
}
function remove(element) {
    console.log(element.parentElement.parentElement)
    element.parentElement.parentElement.remove() 
}