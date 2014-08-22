/**
 * Created by mark_000 on 17/08/14.
 */

var StartView = (function(_super){
   __extends(StartView , _super);
   function StartView()
   {
       _super.call(this , {x:0 , y:0});
   }


   StartView.prototype.draw = function ()
   {
       alert(app.resoultion.width/2 - app.assets.cache['ui_startscreen_play'].width/2);
       alert(app.resoultion.height/2 - app.assets.cache['ui_startscreen_play'].height/2);
       var play_button = new Kinetic.Image({x:app.resoultion.width/2 - app.assets.cache['ui_startscreen_play'].width/2 , y:app.resoultion.height/2 - app.assets.cache['ui_startscreen_play'].height/2 , image: app.assets.cache['ui_startscreen_play']});
       this.layer.add(play_button);
       this.layer.draw();

       $( "#logon-container" ).animate({
           marginTop: "0"
       }, 1000, function() {
           // Animation complete.
       });
   }

   return StartView;
})(_view);