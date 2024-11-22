const selectSignature = (id, type) => {
    document.getElementById("signature1").style.backgroundColor = "transparent";
    document.getElementById("signature2").style.backgroundColor = "transparent";
    document.getElementById("signature3").style.backgroundColor = "transparent";
    
    document.getElementById("signature" + id).style.backgroundColor = "#81b29a";
}

const submitAccount = () => {
    if(document.getElementById("email").value.includes("@") && !document.getElementById("email").value.endsWidth("@") && !document.getElementById("email").value.starsWidth("@") && document.getElementById("password").value.length >= 5) {
        
    }else{
        alert("Some problem with the email or password \n Email need @ or Password length equal 5 or more.");
    }
}