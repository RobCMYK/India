$(document).ready(function () 
{
     // On button click, get value 
     // of input control Show alert 
     // message box 
    $('#btnSubmit').click(function(event) {
        console.log("clicked");
        event.preventDefault();

        var userFirst = document.getElementById("firstname");
        var userFirstVal = userFirst.value;

        var userFirstOutput = document.getElementById("userData");
        userFirstOutput.value = userFirstVal;
//__________________________________________________________________________
        var userLast = document.getElementById("lastname");
        var userLastVal = userLast.value;

        var userLastOutput = document.getElementById("userData");
        userLastOutput.value = userLastVal;
//__________________________________________________________________________
        var userEmail = document.getElementById("email");
        var userEmailVal = userEmail.value;

        var userEmailOutput = document.getElementById("userData");
        userEmailOutput.value = userEmailVal;
//__________________________________________________________________________
        var userPwd = document.getElementById("pwd");
        var userPwdVal = userPwd.value;

        var userPwdOutput = document.getElementById("userData");
        userPwdOutput.value = userPwdVal;

        var userDataOutput = document.getElementById("userData");
        userDataOutput.value = "First Name: " + userFirstVal + "\nLast Name: " + userLastVal + "\nEmail: " + userEmailVal + "\nYour Password: " + userPwdVal;

        });

});

//loads first name into my first input box (in example #1)
