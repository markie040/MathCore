/**
 * Created by mark_000 on 15/08/14.
 */

var _view = (function (){

   function _view (config)
   {
       this._config = config;
       this.layer = new Kinetic.Layer(config);
       window.app.stage.add(this.layer);
   }

    _view.prototype.addToScreen = function ()
    {
        current_screen.add(this.layer);
    }

   return _view;
})();