var b = document.getElementById("b");
var ol = document.getElementById("thelist");
var f1 = function(e){
    console.log(e);
    var node = document.createElement("li");
    var text = document.createTextNode("Yo yo yo!");
    node.appendChild(text);
    ol.appendChild(node);
}
b.addEventListener('click', f1);

var h = document.getElementById("h");
var hOrig = h.innerHTML;
var f2 = function(e){
    console.log(e);
    newtext = this;
    h.innerHTML = newtext;
}
var remove = function(n){
    var li = document.getElementById("li");
    li[n].remove();
}
    
    
li.addEventListener('mouseover', f2);
li.addEventListener('mouseout', f3);
li[7].addEventListener('click' remove);
    
