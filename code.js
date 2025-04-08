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
    let email_form = /[a-zA-Z_0-9\.]+@[a-zA Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+/;
    if (email_form.test(adres))
        return true;
    else {
        return false;
    }
}

function walidacjaFocus(obiekt, wiadomosc) {
    let str = obiekt.value;
    let errorField = "blad_" + obiekt.name.substr(0, obiekt.name.length);
    console.log(errorField);
    if (bialeZnaki(str)) {
        document.getElementById(errorField).innerHTML = wiadomosc;
        obiekt.focus();
        return false;
    } else {
        return true;
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
    if (!poprawnyAdres(document.forms["user_data"]["email"].value))
    {
        alert("Adres e-mail jest niepoprawny");
        return false;
    }
    return true;

}