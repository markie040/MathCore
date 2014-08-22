/**
 * Created by mark_000 on 10/08/14.
 */

var registration = (function (_super) // doesn't need user so _controller not extended;
{
    __extends(registration , _super)

    function registration ()
    {
        this.limit = 99; // limit for number of Free registrations of offline registration
        this.stratagay = app.online === true ? this.onlineregistration : this.offlineregistration; // switcher for the offline application allows a user to set up a trial on the offline app if a application is licenced the registration class should never be use;
    }

    registration.prototype.register = function (_userInformation , callback)
    {
        var results = _super.prototype.call(this , _userInformation);

        if(results.passed === true) // the registation was sucessful so move onto the application with a auto login
        {
            this.createuser(_userInformation);
            return;
        }

        callback(results);
        return;
    }

    registration.prototype.createuser = function (_userInformation)
    {
        var user_configuration = new user_manager.buildUser(_userInformation);
        this.stratagay(user_configuration);
    }

    registration.prototype.onlineregistration  = function (user_configuration)
    {

    }

    registration.prototype.offlineregistration = function (user_configuration)
    {

    }

    return registration;
})(authentication_rules);