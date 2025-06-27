document.querySelector("#continue").addEventListener("click",mycall)
function mycall(event){
    event.preventDefault();
 let otpis=document.getElementById("inputotp").value ;
if(otpis=="1234"){
 alert("Payment getway successful")
   window.location.href="successful.html" 
   return
}
alert("Please Enter Correct Otp")
 
   
}
document.querySelector("#back").addEventListener("click",mybackcall)
function mybackcall(){
    event.preventDefault();
    window.location.href="book-card.html"
}