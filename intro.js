var button = document.getElementById("b");
var buttonz = document.getElementById("uav");
var list = document.getElementById("thelist");
var lista = document.getElementById("list");
var listSub = document.getElementsByTagName("li");
var lia = document.getElementsByTagName("dl");
var h = document.getElementById("h");

var addNode = function(e){
    console.log(e);
    var node = document.createElement("li");
    var text = document.createTextNode("Yo yo yo!");
    node.appendChild(text);
    itemFunctions(node);
    list.appendChild(node);
}

var itemFunctions = function(entry){
	entry.addEventListener('mouseenter', function(){
		h.innerHTML = entry.innerHTML;
	});
	entry.addEventListener('mouseleave', function(){
		h.innerHTML = "Hello World!";
	});
	entry.addEventListener('click', function(){
		entry.remove();
	});
}

var len = listSub.length;
for (var i = 0; i < len; i++){
	var entry = listSub[i];
	itemFunctions(entry);
}

button.addEventListener('click', addNode);

var fib = function(e, ma, ge){
    if(e <= 2){
       return ma;
    }
    else{
       return fib(e-1, ma + ge , ma);
    }        
}

var addNodes = function(e){
    console.log(e);
    var g = fib(lia.length+1, 1, 1).toString();
    var node = document.createElement("dl");
    var text = document.createTextNode(g);
    node.appendChild(text);
    itemFunctions(node);
    lista.appendChild(node);
}


buttonz.addEventListener('click', addNodes);



