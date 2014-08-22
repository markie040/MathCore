/**
 * Created by mark_000 on 15/08/14.
 */

var current_screen     = null;
var application_screen = (function (_super){
    __extends(application_screen , _super)
    function application_screen(name)
    {
        _super.call(this);
        this._layers = new Array(); // array of active layers
    }

    application_screen.prototype.add = function(layer)
    {
        this._layers.push(layer);
    }

    application_screen.prototype._clear = function(idx)
    {
        var _this = this;
        if(idx == this.layers.length) return;

        if(typeof this._layers[idx].parent.clear === 'function')
        {
            this._layers[idx].parent.clear(function(){
                _this._clear(++idx);
            }); // callback function
        }
        else
        {
            this._layers[idx].layer.destroy();
            _this._clear(++idx);
        }

        if(typeof this._callback === 'function')
        {
            this._callback();
        }
    }

    application_screen.prototype.clear = function (callback)
    {
        this._callback = callback;
        this._clear(0);
    }

    return application_screen;
})(application_history);