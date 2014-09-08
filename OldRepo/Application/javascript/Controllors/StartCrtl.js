/**
 * Created by mark_000 on 16/08/14.
 */


var StartCrtl = (function(){
    function StartCrtl()
    {

    }

    StartCrtl.prototype.run = function ()
    {
        this.view = new StartView();
        this.view.draw();
        new language().getClientLanguage();
    }

    return StartCrtl;
})();