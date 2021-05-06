$(document).ready(function () {
  
    
    $("#rbutton").on("click", function(){
        var a = document.getElementById("remail").value;
        var b = document.getElementById("rpass").value;	
        
        alert(a);
        alert(b);
       alert("inside button fun");
       $.post('login.json',   // url
          { Email: a }).done(
            alert("Inside Done"),
           // data to be submit
          function(data, status, jqXHR) {// success callback
            alert("Inside Fun");      
            $('p').append('status: ' + status + ', data: ' + data);
           });
       });
});

