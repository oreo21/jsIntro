var button = document.getElementById("b");
var list = document.getElementById("thelist");
var listSub = document.getElementsByTagName("li");
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
    
