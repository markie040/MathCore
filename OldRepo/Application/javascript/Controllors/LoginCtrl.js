/**
 * Created by mark_000 on 15/08/14.
 */


var LoginCtrl = (function (_super) { // doesn't extend base as user not required !!!!

    function LoginCtrl() {
        this.attemptlimit = 5;
        this.lockouttimer = 30000 ; // 30 seconds
        this.loginURI  = '';
        this.logoutURI = '';
    }

    LoginCtrl.prototype.run = function () {

        this.view = new LoginView(this);
        this._render();
    }

    LoginCtrl.prototype._render = function (msg) {

        this.attemptlimit--;

        switch(this.attemptlimit)
        {
            case 0 :    // user has tried to acess the application and failed 5 times could be a hacker lock the system and inform the company !!!!!
                this._lock();
            break;
            default:
                if(this.attemptlimit <= 0) // catch
                {
                    this._lock();
                    return;
                }
                this.view.draw(msg);
            break;
        }
    }

    LoginCtrl._lock = function ()
    {

    }

    LoginCtrl.authenticateUser = function (username , password)
    {
        var _this = this;

        new user_logger(username , 5 - this.attemptlimit).appendToLog();

        var login = new user_manager();
            login.authenticateUser(username , password , function(success , msg){
                if(success === true)
                {
                    _this._validationSucsessful();
                    return;
                }
                _this._validationError(msg);
                return
            });
    }

    LoginCtrl._validationError = function (msg)
    {

    }

    LoginCtrl._validationSucsessful = function () /// continue to the application
    {

    }
    return LoginCtrl;
})();