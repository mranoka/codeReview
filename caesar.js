function caesarCipher(encryptedString, shift) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var decryptedString = "";
    if (shift > 26) {
        shift = shift % 26;
    }
    var i = 0;
    while (i < encryptedString.length) {
        // Valid Alphabet Characters
        if (alphabet.indexOf(encryptedString[i]) !== -1) {
            // Find Alphabet Index
            var alphabetIndex = alphabet.indexOf(encryptedString[i].toUpperCase());
            // Alphabet Index Is In Alphabet Range
            if (alphabet[alphabetIndex + shift]) {
                decryptedString += alphabet[alphabetIndex + shift];
            }
            // Alphabet Index Out Of Range (Adjust Alphabet By 26 Characters)
            else {
                decryptedString += alphabet[alphabetIndex + shift - 26];
            }
        }
        // Special Characters
        else {
            decryptedString += encryptedString[i];
        }
        i++;
    }
    return decryptedString;
}
//printing the output to terminal to test for correct output
//should print THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.
console.log(caesarCipher("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.", 39));
