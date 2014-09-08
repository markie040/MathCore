/**
 * Created by mark_000 on 15/08/14.
 */

var authentication_rules = (function (){
    function authentication_rules()
    {

    }

    authentication_rules.prototype.validateName  = function (name) // Alphabets, numbers and space(' ') no special characters min 3 and max 20 characters.
    {
        var ck_name = /^[A-Za-z0-9 ]{3,20}$/;
        return ck_name.test(name);
    }

    authentication_rules.prototype.emailExists = function (email) // offline user exists
    {
        var users = window.app.storage.select('users');

        if(users === false) return false; // no users in the storage system !!!!

        for(var key in users)
        {
            if(users[key].email === email)
            {
                return true;
            }
        }

        return false;
    }

    authentication_rules.prototype.validateEmail = function (email) // Standard email address
    {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    authentication_rules.prototype.validatePhoneNumber = function (p) // Phone Number 10 or 11 in length
    {
        var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
        var digits = p.replace(/\D/g, "");

        alert(digits.length)
        if(digits == "") return false;
        else if (isNaN(digits)) return false;
        else if (digits.length == 10 || digits.length == 11) return true;
        else return false;
    }

    return authentication_rules;
})();