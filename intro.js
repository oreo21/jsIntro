var b = document.getElementById("b");
var ol = document.getElementById("thelist");
var f = function(e){
    console.log(e);
    var node = document.createElement("li");
    var text = document.createTextNode("Yo yo yo!");
    node.appendChild(text);
    ol.appendChild(node);
}
b.addEventListener('click', f);
    
    
