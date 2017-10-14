var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// login
/*
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("main").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://bwp-python-webapp.herokuapp.com/login", true);
  xhttp.send();
}

$.get( "https://bwp-python-webapp.herokuapp.com/login", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});
*/

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