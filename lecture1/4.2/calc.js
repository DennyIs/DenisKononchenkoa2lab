function mul(){
	var num1, num2, result;
	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);
	result = num1 * num2;
	document.getElementById('res').innerHTML = result;
}
function div(){
	var num1, num2, result;
	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);
	result = num1 / num2;
	document.getElementById('res').innerHTML = result;
}
function sum(){
	var num1, num2, result;
	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);
	result = num1 + num2
	document.getElementById('res').innerHTML = result;
}
function sub(){
	var num1, num2, result;
	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);
	result = num1 - num2;
	document.getElementById('res').innerHTML = result;
}

function sqr(){
	var num1, result;
	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	result = Math.sqrt(num1)
	document.getElementById('res').innerHTML = result;
}
function fac(){
	var num1, result;
	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
    var result=1;
    for (var i = 2; i <= num1; i++)
        result = result * i;
    	document.getElementById('res').innerHTML = result;
    
	
}

