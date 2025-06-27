document.querySelector("#continue").addEventListener("click",mycall)
function mycall(event){
    event.preventDefault();
    let data=JSON.parse(localStorage.getItem("User-data")) ||[];
    let name=document.getElementById("inputname").value;
    let password=document.getElementById("inputpassword").value;
    let Address=document.getElementById("Address").value;
    let ID=document.getElementById("ID").value;
    
    let surname=document.getElementById("inputsurname").value;
    let conpassword=document.getElementById("conpassword").value;


    data[data.length-1]["namedata"]=name;
    data[data.length-1]["passworddata"]=password;
localStorage.setItem("User-data",JSON.stringify(data));
if(name=="" ){
    alert("Please fill in your name")
    document.getElementById('inputname').style.borderColor="red";
    return;
}
else if(surname==""){
    alert("Please fill in your surname")
    document.getElementById('inputsurname').style.borderColor="red";
    return;
}
else if(password==""){
    alert("Please fill in your password")
    document.getElementById('inputpassword').style.borderColor="red";
    return;
}
else if(password.length<7){
    alert("Password must be atleast 7 characters")
    document.getElementById('inputpassword').style.borderColor="red";
    return;
}
else if(conpassword==""){
    alert("Please confirm your password")
    document.getElementById('conpassword').style.borderColor="red";
    return;
}
else if(conpassword!=password){
    alert("Your passwords do not match!!")
    document.getElementById('conpassword').style.borderColor="red";
    document.getElementById('inputpassword').style.borderColor="red";
    return;
}
else if(Address==""){
    alert("Please fill in your address")
    document.getElementById('Address').style.borderColor="red";
    return;
}
else if(ID==""){
    alert("Please fill in your ID NUMBER")
     document.getElementById('ID').style.borderColor="red";
     return;
}
else if(ID.length<13){
    alert("ID Number too short, must be 13 characters")
    document.getElementById('ID').style.borderColor="red";
    return;
}
else if(ID.length>13){
    alert("ID Number too long,must be 13 characters")
    document.getElementById('ID').style.borderColor="red";
    return;
}


window.location.href="signup-form-3.html"
}
document.querySelector("#back").addEventListener("click",mybackcall)
function mybackcall(){
    event.preventDefault();
    window.location.href="signup-form-1.html"
}