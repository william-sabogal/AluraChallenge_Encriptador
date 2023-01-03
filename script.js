
function encryptContent(){  
    let input = document.getElementById('input-message').value.toLowerCase();  
    let inputArray = input.split('');
    let outputArray = [];
    inputArray.forEach(letter => {
        switch (letter) {
            case 'e':
                outputArray.push('enter')
                break;
            case 'i':
                outputArray.push('imes')
                break;
            case 'a':
                outputArray.push('ai')
                break;
            case 'o':
                outputArray.push('ober')
                break;
            case 'u':
                outputArray.push('ufat')
                break;
            default:
                outputArray.push(letter)
                break;
        }        
    });
    let output = document.getElementById("output-message");
    outputArray.forEach(element => {
        output.innerText+= element;
    });        
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