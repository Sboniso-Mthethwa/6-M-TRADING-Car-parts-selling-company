document.querySelector("#back").addEventListener("click",backfor)
function backfor(){
    event.preventDefault();
    window.location.href="home.html"
}


let userdata=JSON.parse(localStorage.getItem("User-data")) || [] ;

if(userdata.length==0){
document.querySelector("#login").addEventListener("click",mycall)
function mycall(event){
    event.preventDefault();
    window.location.href="login.html"
}
}
else{
    let name=userdata[userdata.length-1].emaildata;
    document.getElementById("login").innerText=name;
     let arr= document.createElement("img") ;
     arr.setAttribute("src","https://www.zoomcar.com/img/icons/icons_user.png") ;
     let parent=document.getElementById("login");
    arr.style.margin="-10px -20px 0px 10px";
    let spain=document.getElementById("spain");
parent.style.display="flex"
    arr.style.margin="-10px -20px 0px 10px";
     parent.append(arr);

document.querySelector("#login").addEventListener("click",mycall)
function mycall(event){
    event.preventDefault();
    window.location.href="logout.html"
}
}
document.querySelector("#zms").addEventListener("click",myzms);
function myzms(event){
    event.preventDefault();
    alert("We are working on this feature")
}




document.querySelector("#host").addEventListener("click",myhost);
function myhost(event){
    event.preventDefault();
    alert("We are working on this feature")
}
