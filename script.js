
function encryptContent(){  
    let output = document.getElementById("output-message");
    output.innerHTML='';
    let input = document.getElementById('input-message').value.toLowerCase();  
    let inputArray = input.split('');
    let outputArray = [];
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
    let input = document.getElementById('input-message').value.toLowerCase();  
    let output = document.getElementById("output-message");  
    try {
        navigator.clipboard.writeText(output);
        console.log('Content copied to clipboard');
        output.innerText = input;
      } catch (err) {
        console.error('Failed to copy: ', err);
    }
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