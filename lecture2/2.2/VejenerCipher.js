function VijenerEncryptor(){
	message = document.getElementById("message").value.toLowerCase();
    key = document.getElementById("key").value.toLowerCase();
    output = message.split('');
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var result = "";
    var index = 0;
    output.forEach(item => {
        var temp = (alphabet.indexOf(item) + alphabet.length + alphabet.indexOf(key[index])) % alphabet.length;
        result += alphabet[temp]
        index += 1
        if (index + 1 > key.length) {
            index = 1
        }
    });
    console.log(result)
    document.getElementById("output").value = result
    
}
function VijenerDecryptor() {
    output = document.getElementById("output").value.toLowerCase();
    key = document.getElementById("key").value.toLowerCase();
    document.getElementById("message").value = output;
    output = output.split('');
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var result = "";
    var index = 0;
    output.forEach(item => {
        var temp = (alphabet.indexOf(item) + alphabet.length - alphabet.indexOf(key[index])) % alphabet.length;
        result += alphabet[temp]
        index += 1
        if (index + 1 > key.length) {
            index = 1
        }
    });
    document.getElementById("output").value = result
}
