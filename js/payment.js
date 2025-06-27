document.querySelector("#pay").addEventListener("click",mycall)
function mycall(event){
    event.preventDefault();
    let cardNo=document.getElementById("card").value;
    let cvcNo=document.getElementById("cvc").value;

    if(cardNo.length<16){
        alert("Card number too short, must be 16 characters")
        document.getElementById('card').style.borderColor="red";
        return;
    }
    else if(cardNo.length>16){
        alert("Card number too long, must be 16 characters ")
        document.getElementById('card').style.borderColor="red";
        return;
    }
    else if(cardNo==""){
        alert("Card number cannot be empty!!!!!")
        document.getElementById('card').style.borderColor="red";
        return;
    }
    else if(cvcNo.length<3){
        alert("CVC number too short, must be 3 characters l")
        document.getElementById('cvc').style.borderColor="red";
        return;
    }
    else if(cvcNo.length>3){
        alert("CVC Number too Long, must be 3 characters")
        document.getElementById('cvc').style.borderColor="red";
        return;
    }
    else if(cvcNo==""){
        alert("CVC Number cannot be empty!!!")
        document.getElementById('cvc').style.borderColor="red";
        return;
    }
    window.location.href="confirm-form.html"
}