var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//////////////////////////////////
//// Main Administrator Login ////

/*
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "user" && password == "pets"){
alert ("Login successfully");
window.location.href = 'home.html'; // Redirecting to other page.
//window.location = "home.html";  
return false;
}
	else{
		alert("keep a' knockin' but ya can't come in....")
		return false;
	}
}
}

/*
$("#submitlogin").click(function() {
  inputs =   //grab then inputs of your form #loginform
    $.ajax ({
       url: "urltoyourloginphp.php",
       data: inputs,
       success: function() {
        $("#login").html("You are now logged in!");
    }
  });
})
*/