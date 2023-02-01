
let password1 = document.getElementById("pass1");
let password2 = document.getElementById("pass2")
let allChars = "~!@#$%^&*()_+>-=/*?.-{}[]<`1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
let temp1 = ""
let temp2 = ""
let pos1 = 0
let pos2 = 0


function Generate() {
    temp1=""
    temp2=""
    for(i=0;i<15;i++){
        pos1 = Math.floor(Math.random() * 89)
        pos2 = Math.floor(Math.random() * 89)
        temp1 += allChars[pos1]
        temp2 += allChars[pos2]
    }
    password1.textContent = temp1
    password2.textContent = temp2
    temp1=""
    temp2=""    
}
function copyFirstPassword(){
    if(document.getElementById("pass1").textContent != "Password1"){
        navigator.clipboard.writeText(password1.textContent);
        temp1 = password1.textContent
        password1.textContent="Copied!"
        document.getElementById("generate").disabled = true
        document.getElementById("copy-second-password").disabled = true
        document.getElementById("copy-first-password").disabled = true
        setTimeout(() => {
            password1.textContent=temp1
            document.getElementById("generate").disabled = false
            document.getElementById("copy-second-password").disabled = false
            document.getElementById("copy-first-password").disabled = false
        }, 1000);
    }
}
function copySecondPassword(){
    if(document.getElementById("pass2").textContent != "Password2"){
        navigator.clipboard.writeText(password2.textContent);
        temp2 = password2.textContent
        password2.textContent="Copied!"
        document.getElementById("generate").disabled = true
        document.getElementById("copy-first-password").disabled = true
        document.getElementById("copy-second-password").disabled = true
        setTimeout(() => {
            password2.textContent=temp2
            document.getElementById("generate").disabled= false
            document.getElementById("copy-first-password").disabled = false
            document.getElementById("copy-second-password").disabled = false
        }, 1000);
    }
}