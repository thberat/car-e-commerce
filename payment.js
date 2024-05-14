var paymentForm = document.getElementById("payment-form");
var paybutton = document.getElementById("pay-button");

paymentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.querySelector("#name").value;
    var cardnumber = document.querySelector("#card-number").value;
    var cvc = document.querySelector("#cvc").value;
    var experationdate = document.querySelector("#expiration-date").value;

    if (name.trim() === "" || cardnumber.trim() === "" || cvc.trim() === "" || experationdate.trim() === "");
 { alert("Please fill all the required fills correctly");
    return; 
}

if (!cardnumber.match (/^\d{13,16}$/)) {
    alert("Please enter valid Card Number");
    return;
}

if(!cvc.match (/^\d{3,4}$/)) {
    alert("Please enter a valid CVC");
    return;
}

document.getElementById("success-message").style.display = "block";

paymentForm.style.filter = "blur(4px)";

paymentForm.reset();
});