$(document).ready(function () 
{


     // On button click, get value 
     // of input control Show alert 
     // message box 
    $("#formSubmit").click(function (e) { 

    e.preventDefault();
    
    var userFirstName = $("#firstname").val(); //defines inputString as the user's input value
    document.getElementById("#userData").innerHTML = "Your first name: " + userFirstName; //add user data to text area
    
    var userLastName = $("#lastname").val(); 
    document.getElementById("#userData").innerHTML = "Your last name: " + userLastName; 

    var userEmail = $("#email").val(); 
    document.getElementById("#userData").innerHTML = "Your email: " + userEmail;

    var userPassword = $("#pwd").val(); 
    document.getElementById("#userData").innerHTML = "Your password: " + userPassword;    
    
    var userBDay = $("#bDate").val(); 
    document.getElementById("#userData").innerHTML = "Your birthday: " + userBDay;

    });

});