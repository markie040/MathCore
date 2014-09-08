/**
 * Created by mark_000 on 20/07/14.
 */

window.application = (function (_super){
    __extends(application , _super)
    function application()
    {
        _super.call(this);
        this.assets = new AssetManager();
        this.resoultion = { width :1366 , height:768}
        this.paths = location.hash.split('/').slice(1, location.hash.split('/').length);
        this.translations = new translations(); // download translation
        this.session = new database('session');
        this.storage = new database();
    }

    application.prototype.init = function ()
    {
        var _this = this;
        this.assets.batchQueue(Theme); // send the UI assest to the download manager
        this.assets.downloadAll(function (){ // download images and sounds
            _super.prototype._constructCanvas.call(_this);
            _this.translations.getAll(function(){
                _this.startApplication();
            });
        }) // when download is complete then launch the application
    }

    application.prototype.startApplication = function ()
    {
        this.deepLink();
    }

    application.prototype.addToPath = function(_path)
    {
        this.path.push(_path);
        window.location.href = this.path.toString().replace(',','/');
    }

    application.prototype.deepLink = function()
    {
        var _temp = new Array();

        for(var i = this.paths.length; i >= 0; i--)
        {
            if(typeof window[this.paths[i]]==='function') // last controller found
            {
                //window.location.href.substr(0, window.location.href.indexOf('#')); // rests the hash path
                for(var j = 0 ; j < i; j++)
                {
                    _temp.push(this.paths[j]);
                }

               // window.location.href = _temp.toString().replace(',','/');

                return;
            }
        }

        // there is no active controller os go to the application start screen
        // window.location.href = window.location.href.substr(0, window.location.href.indexOf('#'));
        this._launchController('StartCrtl');
    }

    application.prototype._launchController = function(ctrl)
    {
        if(typeof window[ctrl] ==='function' )
        {
            if(current_screen != null) // should clear the current screen if no screen then load controller ( should only happen at the start )
            {
                current_screen.clear(function(){
                    current_screen     = new application_screen(ctrl);
                });

                return;
            }

            var ctrl = new window[ctrl]().run();
        }
        else
        {
            throw new Error('Application canont find the Ctrl '+ctrl+' redirecting to the start screen');
            new StartCrtl().run();
        }
    }
    return application;
})(_canvas);
