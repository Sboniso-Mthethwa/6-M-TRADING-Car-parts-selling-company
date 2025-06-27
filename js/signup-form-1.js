document.querySelector("#continue").addEventListener("click",mycall)
function mycall(event){
    event.preventDefault();
    let data=JSON.parse(localStorage.getItem("User-data")) ||[];
    let obj={
        mobiledata:document.getElementById("inputmobile").value,
        emaildata:document.getElementById("inputemail").value,
    }
    let phoneNO=document.getElementById("inputmobile").value;
    let email=document.getElementById("inputemail").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 data.push(obj)
localStorage.setItem("User-data",JSON.stringify(data));


 if(phoneNO==""){
    alert("Please fill in phone number")
    document.getElementById('inputmobile').style.borderColor="red";
    return;
}
else if(phoneNO.length<10){
    alert("Phone number too short,must be 10 numbers long")
    document.getElementById('inputmobile').style.borderColor="red";
    return;
}
else if(phoneNO.length>10){
    alert("Phone number too long,must be 10 numbers long")
    document.getElementById('inputmobile').style.borderColor="red";
    return;
}
else if(email!=email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)){
    alert("Your email syntax is wrong")
    document.getElementById('inputemail').style.borderColor="red";
    return;
}
else if(email==""){
    alert("Please enter your email id")
    document.getElementById('inputemail').style.borderColor="red";
    return;
}
window.location.href="signup-form-2.html"
   
}
document.querySelector("#back").addEventListener("click",mybackcall)
function mybackcall(){
    event.preventDefault();
    window.location.href="login-form.html"
}