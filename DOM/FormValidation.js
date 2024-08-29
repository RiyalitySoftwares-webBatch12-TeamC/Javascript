var NameChar = "^[a-zA-Z]*$";
var space = "S";

function NameErr(){

    var Name = document.getElementById("Name").value;

    if ((Name.match(NameChar))){
        document.getElementById("NameErr").style.visibility="hidden";
    }
    else{
        document.getElementById("NameErr").style.visibility="visible";
    }
}

function MobileErr(){
    var Digit = "^\s*[0-9]+\s*$";

    var Mobile = document.getElementById("Mobile").value;

    
    if ((Mobile.match(Digit)) ){
        document.getElementById("MobileErr").style.visibility="hidden";
    }
    else{
        document.getElementById("MobileErr").style.visibility="visible";
    }
    
}

function EmailErr(){
    var Mail = "^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$";

    var Email = document.getElementById("Email").value;

    
    if ((Email.match(Mail)) ){
        document.getElementById("EmailErr").style.visibility="hidden";
    }
    else{
        document.getElementById("EmailErr").style.visibility="visible";
    }
    
}

function show(){
    var Name = document.getElementById("Name").value;
    var DOB = document.getElementById("DOB").value;
    var Mobile = document.getElementById("Mobile").value;
    var Email = document.getElementById("Email").value;
    var Address = document.getElementById("Address").value;

    if(Name=="" || DOB=="" || Mobile=="" || Email=="" || Address==""){
        alert("Please Fill all Fields");
        return false;
    }
}