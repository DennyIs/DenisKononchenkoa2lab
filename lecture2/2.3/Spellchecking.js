function SpellChecker(){
var string = document.getElementById("text").value;
string = string.replace (/\r\n?|\n/g, ' ').replace (/ {2,}/g, ' ').replace (/^ /, '').replace (/ $/, '');
var word_counter = string.split (' ');
var letter_counter = string.split('');
var errors_latter = ""
var errors_simbols = ""
var errros_small_latter = ""
var textarea_style = document.getElementById("text")
style = textarea_style.style;

var a = string.split('.');
if(a.length > 1) {
	for (var i = 1; i < a.length; i++) {
		var b = a[i].replace(/\s/g, '');
		if (b && b[0].toUpperCase()!==b[0]) {
			errros_small_latter += b[0] + " "
			console.log("после точки маленькая буква: " + b[0])
			style.border = "5px solid #DF0101";		}
	}
}
for (var i = 0; i < string.length; i++){
	
	if(/[^a-zA-Z.,;:!?]/.test(word_counter[i])){
		errors_latter += word_counter[i] + " "
		style.border = "5px solid #DF0101";	
	}
	if (/([.,;:!?]+)(?=\S)/g.test(word_counter[i])) {
		errors_simbols += word_counter[i] + " "
		style.border = "5px solid #DF0101";
	}
}
document.getElementById("output").value = "Количество слов: " + word_counter.length  + "\n"  
+ "Количество букв: " + letter_counter.length + "\n" + "Есть недопустимые символы в слове: " + errors_latter
+ "\n" + "Знак препинания без пробела: "+ errors_simbols + "\n" + "После точки есть маленькая буква: " + errros_small_latter
}