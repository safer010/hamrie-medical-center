let form1 = document.getElementById ("form1");
let button1 = document.getElementById ("button1");
let button2 = document.getElementById ("button2");
let errMsg1 = document.getElementById ("error1");
let errMsg2 = document.getElementById ("error2");


/*form1.addEventListener ("submit", (login) =>
{
    login.preventDefault(); 
        if (username.value && password.value == "hamrie101")
        {
            button1.disabled = false;
            window.location.href = "http://127.0.0.1:5500/Javascript/assignment1/HamrieMedicalCenterForm.html";
        }

        else
        {
            username.value = "Invalid Username or Password"
            button1.disabled = true;
        }
});*/

function login (event)
{
    event.preventDefault();

    let username = document.getElementById ("username");
    let password = document.getElementById ("password");
    //console.log (username)
    
    if( checkLogin(username.value))
    {
        if (username.value == "hamrie101")
        {
            console.log("Correct Username");
            window.location.href = "http://127.0.0.1:5500/assignment1/HMCForm.html";
        }

        else
        {
            errMsg1.innerHTML = "Incorrect Username";
        }
    }

    if( checkLogin(password.value))
    {
        if (password.value == "hamrie101")
        {
            console.log ("Correct Password")
        }

        else
        {
            errMsg2.innerHTML = "Incorrect Password";
        }
    }
}

function checkLogin (field)
{
    if(field.trim() === "")
    {
        console.log ("Blank or Empty");
        errMsg1.innerHTML = "Blank or Empty";
        return false
    }

    else
    {
        return true;
    }
}
form1.addEventListener ("submit",login)
