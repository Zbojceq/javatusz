/*
function pustoTu(name)
{
    var check = getElementByName(name).value;
    if (check == "") 
        alert("Field " + name + " is empty!");
        return false;
}
*/

function pustoTu(napis)
{
    if (napis.length == 0) 
    {
        return false;
    }
    else
    {
        return true;
    }
}

function bialeZnaki(string)
{
    return string.trim().length === 0;
}

function poprawnyAdres(adres) {
    let email_form = /^[a-zA-Z_0-9\.]+@[a-zA Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+\$/;
    if (email_form.test(adres))
        return true;
    else {
        alert("Adres e-mail jest niepoprawny");
        return false;
    }
    }

function weryfikacja()
{
    names = ["imie", "email" , "kod"];
    for (var i = 0; i < names.length; i++)
    {
        var pole = document.forms["user_data"][names[i]].value; 
        if (pustoTu(pole) == false)
        {
            alert("Podaj " + names[i]);
            return false;
        }
        else if (bialeZnaki(pole))
        {
            alert("Podaj " + names[i]);
            return false;
        }
    }
    return poprawnyAdres(document.forms["user_data"]["email"].value);
    
}