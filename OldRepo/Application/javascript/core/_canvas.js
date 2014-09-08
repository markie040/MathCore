/**
 * Created by mark_000 on 16/08/14.
 */
window._canvas = (function (){ // helper function for canvas maniplation
    function _canvas()
    {

    }

    _canvas.prototype._constructCanvas = function ()
    {
        var _this = this;
        this.stage = new Kinetic.Stage({
            container: 'canvas',
            width: this.resoultion.width,
            height: this.resoultion.height
        });

        this._scaleCanvas();

        window.onresize = function () {
            _this._scaleCanvas();
        }
    }

    _canvas.prototype._scaleCanvas = function()
    {
        var wrapper = document.getElementById('wrapper');
        var boarder_bottom   = document.getElementsByClassName('base-container');
        var boarder_top   = document.getElementsByClassName('base-container-top');
        var fonts   = document.getElementsByClassName('text');
        var titles   = document.getElementsByClassName('title');
        var login   = document.getElementById('logon-container');
        console.log(fonts);
        var w = window.innerWidth;
        var h = window.innerHeight;

        var ratioW = window.innerWidth  / this.resoultion.width;
        var ratioH = window.innerHeight / this.resoultion.height;

        this.scale = ratioW < ratioH ? ratioW : ratioH;

        var newHeight = parseInt(this.resoultion.height * this.scale);
        var newWidth  = parseInt(this.resoultion.width  * this.scale);

        if(login != null)
        {
            login.style.borderLeftWidth = 4 * this.scale + 'px';
            login.style.borderRightWidth = 4 * this.scale + 'px';
        }

        if(fonts != null)
        {
            for(var idx = 0; idx < fonts.length; idx++)
            {
                fonts[idx].style.fontSize = 30 * this.scale + 'px';
                fonts[idx].style.height = 60 * this.scale + 'px';
                fonts[idx].style.marginTop = 20 * this.scale + 'px';
                fonts[idx].style.textIndent = 10 * this.scale + 'px';
            }
        }

        if(titles != null)
        {
            for(var idx = 0; idx < titles.length; idx++)
            {

                titles[idx].style.fontSize = titles[idx].getAttribute('fontsize') * this.scale + 'px';
            }
        }

        if(boarder_top != null)
        {
            for(var idx = 0; idx < boarder_top.length; idx++)
            {
                boarder_top[idx].style.borderTopWidth = 3 * this.scale + 'px';
            }
        }

        if(boarder_bottom != null)
        {
            for(var idx = 0; idx < boarder_bottom.length; idx++)
            {
                boarder_bottom[idx].style.borderBottomWidth = 3 * this.scale + 'px';
            }
        }


        wrapper.style.width  = newWidth + "px";
        wrapper.style.height = newHeight + "px";

        wrapper.style.position = "absolute";
        wrapper.style.left     = parseInt((w - newWidth) / 2) + "px";
        wrapper.style.top      = parseInt((h - newHeight) / 2) + "px";

        this.stage.scale({x: this.scale, y: this.scale});
        this.stage.width(newWidth);
        this.stage.height(newHeight);

        this.stage.batchDraw();
    }

    return _canvas;
})();