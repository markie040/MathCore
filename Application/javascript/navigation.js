/**
 * Created by mark_000 on 20/07/14.
 */

var _controllor = (function (){
  function _controllor(services)
  {
      this._services = services;
  }

  _controllor.prototype.launch = function (callback)
  {
      if(this._services.length === 0)
      {
          callback();
          return ;
      }


  }
  return _controllor;
})();

var Screen    =  (function (){
    function Screen(controllor , attr)
    {
        this.layers = [];
        this.controllor  =     window[controllor]
        this._controllor = new window[controllor](attr);
    }

    Screen.prototype.clear = function (clear_completion_callback)
    {

    }

    return Screen;
})();

var Navigation = (function (){
    function Navigation()
    {
        this.paths = {}
    }

    Navigation.prototype.launch_controller = function (controllor , attr)
    {
        if(window[controllor] === 'function')
        {
            if(app.screen != null) //
            {
                if(app.screen.controllor != window[controllor])
                {
                    app.screen.clear(function(){
                        app.screen = new Screen(controllor , attr);
                    });
                }
                else
                {
                    // the controllor has been called twice todo
                }
            }
            else // this should only happen at startup !!!!!
            {
                app.screen = new Screen(controllor , attr);
            }
        }
        else
        {
            throw new Error("Error 001 , unknown controllor has been called !!! this can be due to sytax error in the controllor or the controllor dosent exist !")
        }
    }


    return Navigation;
})();