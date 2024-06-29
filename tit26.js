let qr=document.querySelector(".code");
let img=document.querySelector("#img");
let text=document.querySelector(".txt")

function generate(){
    if(text.value===""){
        alert("To generateba  QR Code u must enter any text or url")
    }
    else{
    img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
    img.style.display="block";
    img.style.margin="0 auto";
    img.style.backgroundColor="white";
    img.style.padding="10px";
    }

}
