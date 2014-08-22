/**
 * Created by mark_000 on 15/08/14.
 */

var user_manager = (function (_super) {
    __extends(user_manager , _super)
    function user_manager(){

    }

    user_manager.prototype.authenticateUser = function (username , password , callback)
    {
        callback(true);
    }

    user_manager.prototype.buildUser = function (user_information)
    {
        return true;
    }

    user_manager.prototype.generatePassword = function(){
        var keylist = "abcdefghijklmnopqrstuvwxyz123456789";
        var studentKeyList = [app.translations.getText(0 , 'sheep') , app.translations.getText(0 , 'lion') ,app.translations.getText(0 , 'pig'),app.translations.getText(0 , 'cow'), app.translations.getText(0 , 'bear'),app.translations.getText(0 , 'horse'),app.translations.getText(0 , 'duck'),app.translations.getText(0 , 'tiger'),app.translations.getText(0 , 'otter'),app.translations.getText(0 , 'owl'),app.translations.getText(0 , 'chicken'), app.translations.getText(0 , 'beaver'),app.translations.getText(0 , 'goat')]
        var numbers = [app.translations.getText(0 , 'one') , app.translations.getText(0 , 'two') ,app.translations.getText(0 , 'three'),app.translations.getText(0 , 'four'), app.translations.getText(0 , 'five'),app.translations.getText(0 , 'six'),app.translations.getText(0 , 'seven'),app.translations.getText(0 , 'eight'),app.translations.getText(0 , 'nine'),app.translations.getText(0 , 'ten')];

        return {
            generateAdminPass: function (plength) {
                var temp=''
                for (i=0;i<plength;i++)
                    temp+=keylist.charAt(Math.floor(Math.random()*keylist.length))
                return temp
            },
            generateStudentPass: function () {
                var temp=''
                    temp+=numbers[Math.floor(Math.random()*numbers.length)];
                    temp+=studentKeyList[Math.floor(Math.random()*studentKeyList.length)];
                return temp.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "");// this is a catch for lack of translations ;
            }
        }
    }

    user_manager.prototype.createAsync = function(TUser, password) { // create a user with a password
        if (arguments.length == 1) // no password hass been given so generate a password
        {
            switch(TUser.type)
            {
                case 'teacher' : password = this.generatePassword().generateAdminPass(7); break;
                case 'library' : password = this.generatePassword().generateAdminPass(7); break;
                case 'student' : password = this.generatePassword().generateStudentPass();break;
                default :
                    password = this.generatePassword().generateAdminPass(7);
                    break;
            }
        }


    }



    return user_manager;
})(authentication_rules);