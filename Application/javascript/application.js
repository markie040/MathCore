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
    }

    application.prototype.init = function ()
    {
        var _this = this;
        this.assets.batchQueue(Theme); // send the UI assest to the download manager
        this.assets.downloadAll(function (){
            _super.prototype._constructCanvas.call(_this);
            _this._buildBackground();
            var settings = new ui_settings();
            console.log(settings.build);
            settings.build();
        }) // when download is complete then launch the application
    }

    application.prototype._buildBackground = function ()
    {
        this.background = new Kinetic.Layer();
        this.stage.add(this.background);

        console.log(this.assets.cache);
        var background = new Kinetic.Image({x:0 , y:0 , image: this.assets.cache['background']});
        this.background.add(background);
        this.background.batchDraw();
    }
    return application;
})(_canvas);
