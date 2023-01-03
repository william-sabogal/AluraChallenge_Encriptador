
function encryptContent(){  
    let output = document.getElementById("output-message");
    output.innerHTML='';
    let input = document.getElementById('input-message').value.toLowerCase();  
    let inputArray = input.split('');
    let outputMessage ='';
    inputArray.forEach(letter => {
        switch (letter) {
            case 'e':
                outputMessage+='enter';
                break;
            case 'i':
                outputMessage+='imes';
                break;
            case 'a':
                outputMessage+='ai';
                break;
            case 'o':
                outputMessage+='ober';
                break;
            case 'u':
                outputMessage+='ufat';
                break;
            default:
                outputMessage+=letter;
                break;
        }        
    });
    output.innerHTML=outputMessage;      
}

function unEncryptContent(){  
    let output = document.getElementById("output-message");
    output.innerHTML='';
    let input = document.getElementById('input-message').value.toLowerCase();
    let outputMessage ='';
    let outputArray = new Array(input.length).fill('');
    let words = ['enter', 'imes', 'ai', 'ober', 'ufat'];
    let letters = ['a','e','i','o','u'];
    let wordIndex = -1;
    words.forEach(word => {
        wordIndex = input.includes(word);
        while (wordIndex != -1) {
            switch (word) {
                case 'enter':
                    outputArray.splice(wordIndex,1,'e');
                    break;
                case 'imes':
                    outputArray.splice(wordIndex,1,'i');
                    break;
                case 'ai':
                    outputArray.splice(wordIndex,1,'a');
                    break;
                case 'ober':
                    outputArray.splice(wordIndex,1,'o');
                    break;
                case 'ufat':
                    outputArray.splice(wordIndex,1,'u');
                    break;
                default:
                    break;
            }  
        }        
        wordIndex = input.includes(word,wordIndex++)         
    });
    output.innerHTML=outputArray.toString();
}

function copyContent() {
    let output = document.getElementById("output-message").innerHTML;
    try {
      navigator.clipboard.writeText(output);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }