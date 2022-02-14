var textBox = document.getElementById("txtMsj");
var outMsj = document.getElementById("outMsj");
var btnEncrypt = document.getElementById("btnEncrypt");
var btnDecrypt = document.getElementById("btnDecrypt");
var btnCopy = document.getElementById("btnCopy");

btnEncrypt.onclick = showMsjEncrypted;
btnDecrypt.onclick = showMsjDecrypted;
btnCopy.onclick = CopyMsj;

function showMsjEncrypted(){
    console.log(Encrypt(textBox.value));
    outMsj.value = Encrypt(textBox.value);
}

function showMsjDecrypted(){
    console.log(Decrypt(textBox.value));
    outMsj.value = Decrypt(textBox.value);
}

function CopyMsj(){
    outMsj.select();
    outMsj.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function Encrypt(msj){

    var msjEncrypted = "";

    for(var i = 0; i < msj.length; i++){

        switch(msj[i]){
            case "a":
                msjEncrypted += "ai";
                break;
            
            case "e":
                msjEncrypted += "enter";
                break;

            case "i":
                msjEncrypted += "imes";
                break;

            case "o":
                msjEncrypted += "ober";
                break;

            case "u":
                msjEncrypted += "ufat";
                break;

            default:
                msjEncrypted += msj[i];
                break;
        }
    }
    return msjEncrypted;
}

function Decrypt(msj){

    var msjDecrypted = "";

    for(var i = 0; i < msj.length; i++){

        switch(msj[i]){
            case "a":
                msjDecrypted += "a";
                i += 1;
                break;
            
            case "e":
                msjDecrypted += "e";
                i += 4;
                break;

            case "i":
                msjDecrypted += "i";
                i += 3;
                break;

            case "o":
                msjDecrypted += "o";
                i +=3
                break;

            case "u":
                msjDecrypted += "u";
                i += 3
                break;

            default:
                msjDecrypted += msj[i];
                break;
        }
    }
    return msjDecrypted;
}