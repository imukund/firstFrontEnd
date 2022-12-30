function valid(){
    var username=document.getElementById("userid").value ;
    var pass=document.getElementById("pass").value;
    if((username=="admin" && pass=="pass")||(username=="rt5371" && pass=="feekart")||(username=="hello"&&pass=="hello")){
        return false;
    }
    else{
        close("feekart.html");
        open("feekart.html"); 
    }
}