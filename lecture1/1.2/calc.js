function GetNumbers(){
	
	num1 = document.getElementById('num1').value;
	num2 = document.getElementById('num2').value;
	return parseInt(num1, num2) 
	
}
function MathOperation(oper){
	numbers = GetNumbers();
	var result;
	switch(oper){
		case "*":{
			result = num1 * num2;
			break;
		}
		case "/":{
			result = num1 / num2;
			break;
		}
		case "+":{
			result = num1 + num2;
			break;
		}
		case "-":{
			result = num1 - num2;
			break;
		}
		case "√":{
			result = Math.sqrt(num1)
			break;
		}
		case "!n":{
			result=1;
    			for (var i = 2; i <= num1; i++)
        			result = result * i;
			break;
		}
	}
	document.getElementById('res').innerHTML = result;
	 
}