/**
 * Created by mark_000 on 17/08/14.
 */

var translations = (function (){
    function translations()
    {
        this.textarr = {};
    }

    translations.prototype.getAll = function(callback)
    {
        callback();
    }

    translations.prototype.getText = function(uid , _default)
    {
        if(typeof this.textarr[uid] != 'undefined')
        {
           return this.textarr[uid];
        }

        return '[' + _default + ']';
    }

    return translations;
})();