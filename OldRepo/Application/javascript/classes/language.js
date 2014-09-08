/**
 * Created by mark_000 on 18/08/14.
 */

var language = (function (){
    function language()
    {
        this.support_language_uid = 1; // default to English GB
        this.navigator_code = 'en-gb';
    }

    language.prototype.switchSupportLanguage = function() {

    };

    language.prototype.convertToLanguageUid = function (code)
    {
        this.navigator_code = code.toLowerCase();
        switch(code.toLowerCase())
        {
            case 'en-gb' : this.support_language_uid = 1; break;
            default :
                this.support_language_uid = 1; this.navigator_code = 'en-gb';
                break;
        }
    }

    language.prototype.getClientLanguage = function ()
    {
        var language = window.navigator.userLanguage || window.navigator.language;
        alert(doLangSelect(language)); //works IE/SAFARI/CHROME/FF
    }

    return language;
})();