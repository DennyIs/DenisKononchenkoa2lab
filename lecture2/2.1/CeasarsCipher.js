function CeasarEncryptor(){
	message = document.getElementById("message").value
    shift = document.getElementById("shift").value
    shift = parseInt(shift)
    var result = ""
    var i = 0
    while ( i < message.length )
    {
        letter = message[i]
        letter = letter.charCodeAt(letter)
        if (letter >= 97 && letter <=122) {
            result += String.fromCharCode((letter - 97 + shift) % 26 + 97)
        } else if(letter >= 65 && letter <=90){
            result += String.fromCharCode((letter - 65 + shift) % 26 + 65)
        } else {
            result += String.fromCharCode(letter)
        }
        i++
    }
    document.getElementById("output").value = result
    
}
function CeasarDecryptor(){
	output = document.getElementById("output").value
    shift = document.getElementById("shift").value
	var decryp_result = ""
    var i = 0
    while (shift > 26) {
        shift = shift - 26
    }
    while (i < output.length)
    {   
    	letter = output[i]
    	letter = letter.charCodeAt(letter)
    	if (letter >=97 && letter < 123) {
            decryp_result += String.fromCharCode((letter - 97 - shift + 26) % 26 + 97)
           
        } else if (letter >= 65 && letter <= 90) {
            decryp_result += String.fromCharCode((letter - 65 - shift + 26) % 26 + 65)
        } else {
            decryp_result += String.fromCharCode(letter)
        }
    	i++
    }
    document.getElementById("output").value = decryp_result

}