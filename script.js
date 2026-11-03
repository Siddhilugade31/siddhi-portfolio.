
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    document.getElementById("result").innerText =
        "Thank you " + name + "! Your message has been received.";

    alert("Thank You for Contacting Me, " + name + "!");

    document.getElementById("contactForm").reset();

});
