function valid(){
    var username=document.getElementById("userid").value ;
    var pass=document.getElementById("pass").value;
    if((username=="admin" && pass=="password")||(username=="mukund" && pass=="java")||(username=="hello"&&pass=="hello")){
        return false;
    }
    else{
        close("frontend.html");
        open("frontend.html"); 
    }
}