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
        letter = letter + shift
        result += String.fromCharCode(letter)
        i++
    }
    document.getElementById("output").value = result
    
}
function CeasarDecryptor(){
	output = document.getElementById("output").value
    shift = document.getElementById("shift").value
	decryptor = CeasarEncryptor()
	var decryp_result = ""
	shift =- shift
    var i = 0
    while (i < output.length)
    {
    	letter = output[i]
    	letter = letter.charCodeAt(letter)
    	letter = letter + shift
    	decryp_result += String.fromCharCode(letter)
    	i++
    }
    document.getElementById("output").value = decryp_result

}